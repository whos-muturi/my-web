import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.log('3D Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex items-center justify-center h-full bg-cyber-dark/30 rounded-xl border border-gray-600">
          <div className="text-center p-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center">
              <span className="text-2xl">🎨</span>
            </div>
            <p className="text-gray-400">3D content unavailable</p>
            <p className="text-sm text-gray-500 mt-2">Fallback mode active</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;