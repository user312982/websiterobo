import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null });
        window.location.href = '/';
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-[#020403] flex items-center justify-center px-4">
                    <div className="max-w-md w-full text-center">
                        <div className="mb-8">
                            <div className="text-6xl mb-4">⚠️</div>
                            <h1 className="text-3xl font-bold text-white mb-2">Oops! Something went wrong</h1>
                            <p className="text-gray-400 mb-6">
                                We encountered an unexpected error. Please try again.
                            </p>
                        </div>
                        
                        <button
                            onClick={this.handleReset}
                            className="bg-[#FFCC00] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#FFD633] transition-colors"
                        >
                            Return to Home
                        </button>

                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <div className="mt-8 p-4 bg-red-900/20 border border-red-500 rounded-lg text-left">
                                <p className="text-red-400 text-sm font-mono">
                                    {this.state.error.toString()}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
