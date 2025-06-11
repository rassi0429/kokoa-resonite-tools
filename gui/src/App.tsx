import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Settings, Loader2, AlertCircle } from 'lucide-react';
import HomeTab from './components/HomeTab';
import ProfilesTab from './components/ProfilesTab';
import { useAppStore } from './store/useAppStore';
import { useAppStatus } from './hooks/useQueries';

function App() {
  const { 
    currentTab, 
    setCurrentTab, 
    appStatus,
    isInitializing,
    setIsInitializing 
  } = useAppStore();

  const { 
    data: statusData, 
    isLoading: isLoadingStatus, 
    error: statusError,
    refetch: refetchStatus 
  } = useAppStatus();

  useEffect(() => {
    setIsInitializing(isLoadingStatus);
  }, [isLoadingStatus, setIsInitializing]);

  if (isInitializing) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center space-y-4"
        >
          <Loader2 className="w-8 h-8 text-resonite-blue animate-spin" />
          <p className="text-gray-300 text-lg">アプリケーションを初期化中...</p>
        </motion.div>
      </div>
    );
  }

  if (statusError) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card max-w-md w-full text-center"
        >
          <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">エラー</h3>
          <p className="text-gray-300 mb-6">{String(statusError)}</p>
          <button className="btn-primary w-full" onClick={() => refetchStatus()}>
            再試行
          </button>
        </motion.div>
      </div>
    );
  }

  // Show warning if DepotDownloader is not available
  const showDepotWarning = appStatus && !appStatus.depot_downloader_available;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-dark-950 flex flex-col"
    >
      {/* DepotDownloader Warning Banner */}
      {showDepotWarning && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-yellow-600/20 border-b border-yellow-600/30 p-3"
        >
          <div className="max-w-7xl mx-auto flex items-center space-x-3">
            <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
            <p className="text-yellow-200 text-sm">
              <strong>警告:</strong> DepotDownloader が見つかりません。ゲームのインストール・更新を行うには、アプリケーションディレクトリに DepotDownloader.exe を配置してください。
            </p>
          </div>
        </motion.div>
      )}

      {/* Header */}
      <header className="bg-dark-900/50 backdrop-blur-md border-b border-dark-700/50 p-4">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-gradient mb-4"
          >
            Resonite Tools
          </motion.h1>
          
          <nav className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`nav-button flex items-center space-x-2 ${
                currentTab === 'home' ? 'nav-button-active' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setCurrentTab('home')}
            >
              <Home className="w-4 h-4" />
              <span>ホーム</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`nav-button flex items-center space-x-2 ${
                currentTab === 'profiles' ? 'nav-button-active' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setCurrentTab('profiles')}
            >
              <Settings className="w-4 h-4" />
              <span>プロファイル管理</span>
            </motion.button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <motion.div
          key={currentTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          {currentTab === 'home' && <HomeTab />}
          {currentTab === 'profiles' && <ProfilesTab />}
        </motion.div>
      </main>

      {/* Status Bar */}
      <footer className="bg-dark-900/30 backdrop-blur-sm border-t border-dark-700/30 p-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            {appStatus?.exe_dir && (
              <span className="text-gray-400">
                📁 {appStatus.exe_dir}
              </span>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            {appStatus?.depot_downloader_available ? (
              <span className="status-success">
                ✓ DepotDownloader
              </span>
            ) : (
              <span className="status-error">
                ✗ DepotDownloader
              </span>
            )}
          </div>
        </div>
      </footer>
    </motion.div>
  );
}

export default App;