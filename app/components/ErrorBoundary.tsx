import { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="error-boundary">
          <div className="error-content">
            <h2>Bir şeyler ters gitti</h2>
            <p>Sayfa yüklenirken bir hata oluştu. Lütfen sayfayı yenileyin.</p>
            <button 
              onClick={() => window.location.reload()}
              className="error-reload-btn"
            >
              Sayfayı Yenile
            </button>
          </div>
          
          <style>{`
            .error-boundary {
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #0a192f;
              color: #8892b0;
              font-family: 'Inter', sans-serif;
              padding: 2rem;
            }
            
            .error-content {
              text-align: center;
              max-width: 500px;
            }
            
            .error-content h2 {
              color: #ccd6f6;
              margin-bottom: 1rem;
              font-size: 1.5rem;
            }
            
            .error-content p {
              margin-bottom: 2rem;
              line-height: 1.6;
            }
            
            .error-reload-btn {
              background: #64ffda;
              color: #0a192f;
              border: none;
              padding: 0.75rem 1.5rem;
              border-radius: 0.5rem;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.3s ease;
            }
            
            .error-reload-btn:hover {
              background: #4fd1c7;
              transform: translateY(-1px);
            }
          `}</style>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;