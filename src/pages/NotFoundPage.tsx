import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20">
      <Container size="narrow" className="text-center space-y-6">
        <div className="font-display text-8xl sm:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent via-indigo-300 to-emerald-400">
          404
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink">
          Page Not Found
        </h1>
        <p className="text-base text-gray-400 max-w-md mx-auto leading-relaxed">
          The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            icon={<Home className="w-4 h-4" />}
            iconPosition="left"
            asAnchor
            href="/"
          >
            Back To Home
          </Button>
          <Button
            variant="outline"
            icon={<ArrowLeft className="w-4 h-4" />}
            iconPosition="left"
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>
      </Container>
    </div>
  );
};
