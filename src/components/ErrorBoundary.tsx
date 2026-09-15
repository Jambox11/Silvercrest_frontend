'use client';

import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  message: string | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { message: null };

  static getDerivedStateFromError(error: Error): State {
    return { message: error.message || 'Something went wrong' };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('SilverKrest UI error', error, info.componentStack);
  }

  render() {
    if (this.state.message) {
      return (
        <div className="max-w-lg mx-auto px-4 py-24 text-center">
          <h1 className="text-xl font-semibold text-gray-900">Marketplace interrupted</h1>
          <p className="text-sm text-gray-500 mt-2">{this.state.message}</p>
          <button
            type="button"
            className="mt-6 px-4 py-2 bg-stellar-500 text-white rounded-lg text-sm font-medium"
            onClick={() => this.setState({ message: null })}
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
