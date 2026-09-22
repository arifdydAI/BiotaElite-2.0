import { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in BiotaElite UI surface:', error, errorInfo);
  }

  private handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem',
            color: '#ffffff',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(239, 68, 68, 0.12)',
              color: '#f87171',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem',
            }}
          >
            <AlertCircle size={32} />
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            Something went wrong loading biodiversity records
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--accent-emerald-light)', marginBottom: '0.75rem' }}>
            জীববৈচিত্র্য তথ্য প্রদর্শনে একটি অনাকাঙ্ক্ষিত ত্রুটি ঘটেছে।
          </p>
          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              maxWidth: '520px',
              lineHeight: 1.6,
              marginBottom: '1.5rem',
            }}
          >
            The zoological dataset remains intact. You can try refreshing the page or navigating back to the home portal.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button onClick={this.handleReload} className="btn btn-primary" style={{ gap: '0.4rem' }}>
              <RefreshCw size={15} />
              <span>Retry / পুনরায় চেষ্টা করুন</span>
            </button>
            <a href="/" className="btn btn-secondary">
              Home / হোম
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
