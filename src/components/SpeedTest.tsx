import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowDown, ArrowUp, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SpeedResults {
  download: number;
  upload: number;
  ping: number;
}

const SpeedTest = () => {
  const [isTesting, setIsTesting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'idle' | 'ping' | 'download' | 'upload' | 'complete'>('idle');
  const [results, setResults] = useState<SpeedResults | null>(null);
  const [currentSpeed, setCurrentSpeed] = useState(0);

  const startTest = () => {
    setIsTesting(true);
    setProgress(0);
    setResults(null);
    setPhase('ping');

    // Simulate ping test
    setTimeout(() => {
      setPhase('download');
      setProgress(20);
    }, 1000);
  };

  useEffect(() => {
    if (phase === 'download') {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 60) {
            clearInterval(interval);
            setPhase('upload');
            return 60;
          }
          const newSpeed = Math.random() * 200 + 800;
          setCurrentSpeed(newSpeed);
          return prev + 2;
        });
      }, 100);
      return () => clearInterval(interval);
    }

    if (phase === 'upload') {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setPhase('complete');
            setIsTesting(false);
            setResults({
              download: Math.floor(Math.random() * 200) + 750,
              upload: Math.floor(Math.random() * 100) + 80,
              ping: Math.floor(Math.random() * 15) + 5
            });
            return 100;
          }
          const newSpeed = Math.random() * 50 + 80;
          setCurrentSpeed(newSpeed);
          return prev + 2;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [phase]);

  return (
    <div className="floating-card p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Speed Test</h2>
        <p className="text-muted-foreground">Test your current internet speed</p>
      </div>

      {/* Speed Gauge */}
      <div className="relative w-64 h-64 mx-auto mb-8">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-muted"
          />
          {/* Progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            className="text-primary"
            strokeDasharray={264}
            initial={{ strokeDashoffset: 264 }}
            animate={{ strokeDashoffset: 264 - (264 * progress) / 100 }}
            transition={{ duration: 0.1 }}
          />
        </svg>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {isTesting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-8 h-8 text-primary mb-2" />
              </motion.div>
              <span className="text-4xl font-bold text-foreground">
                {currentSpeed.toFixed(0)}
              </span>
              <span className="text-sm text-muted-foreground">Mbps</span>
              <span className="text-xs text-muted-foreground mt-2 capitalize">{phase}...</span>
            </>
          ) : results ? (
            <>
              <span className="text-4xl font-bold text-foreground">{results.download}</span>
              <span className="text-sm text-muted-foreground">Mbps Download</span>
            </>
          ) : (
            <>
              <Zap className="w-12 h-12 text-primary mb-2" />
              <span className="text-lg text-muted-foreground">Ready to test</span>
            </>
          )}
        </div>
      </div>

      {/* Results */}
      {results && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          <div className="text-center p-4 rounded-xl bg-muted/50">
            <ArrowDown className="w-5 h-5 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">{results.download}</p>
            <p className="text-xs text-muted-foreground">Mbps Download</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-muted/50">
            <ArrowUp className="w-5 h-5 text-accent mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">{results.upload}</p>
            <p className="text-xs text-muted-foreground">Mbps Upload</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-muted/50">
            <Zap className="w-5 h-5 text-yellow-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">{results.ping}</p>
            <p className="text-xs text-muted-foreground">ms Ping</p>
          </div>
        </motion.div>
      )}

      {/* Action Button */}
      <div className="text-center">
        <Button
          onClick={startTest}
          disabled={isTesting}
          variant="hero"
          size="lg"
          className="gap-2"
        >
          {isTesting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <RefreshCw className="w-5 h-5" />
              </motion.div>
              Testing...
            </>
          ) : results ? (
            <>
              <RefreshCw className="w-5 h-5" />
              Test Again
            </>
          ) : (
            <>
              <Zap className="w-5 h-5" />
              Start Speed Test
            </>
          )}
        </Button>
      </div>

      <p className="text-xs text-muted-foreground text-center mt-4">
        *This is a simulated test for demonstration purposes
      </p>
    </div>
  );
};

export default SpeedTest;