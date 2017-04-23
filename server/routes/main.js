exports.dashboard = (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'index.html'));
};

exports.splash = (req, res) => {
  res.sendFile(path.join(__dirname, 'public/splash.html'));
};