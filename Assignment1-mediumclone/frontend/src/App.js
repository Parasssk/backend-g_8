import React from 'react';

const App = () => {
  return (
    <div style={styles.container}>
      
      {/* Header Section */}
      <header style={styles.header}>
        <div>Our Story</div>
        <div>Membership</div>
        <button style={styles.writeButton}>Write</button>
      </header>

      <div style={styles.body}>
        
        {/* Left Sidebar */}
        <aside style={styles.leftSidebar}>
          <button style={styles.sidebarButton}>Home</button>
          <button style={styles.sidebarButton}>Explore</button>
          <button style={styles.sidebarButton}>Notification</button>
          <button style={styles.sidebarButton}>Profile</button>
        </aside>

        {/* Main Content Section */}
        <main style={styles.mainContent}>
          <h2>Blogs</h2>
          <div style={styles.blogPost}>
            <h3>John Doe</h3>
            <p>This is the content of John's blog post...</p>
          </div>
          <div style={styles.blogPost}>
            <h3>Jane Smith</h3>
            <p>This is the content of Jane's blog post...</p>
          </div>
          <div style={styles.blogPost}>
            <h3>Mary Johnson</h3>
            <p>This is the content of Mary's blog post...</p>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside style={styles.rightSidebar}>
          <h3>People to Follow</h3>
          <ul>
            <li>David Warner</li>
            <li>Sarah Connor</li>
            <li>Elon Musk</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    fontSize: '18px',
  },
  writeButton: {
    backgroundColor: '#ffffff',
    color: '#007bff',
    border: '1px solid #007bff',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  body: {
    display: 'flex',
    flex: 1,
  },
  leftSidebar: {
    width: '20%',
    backgroundColor: '#f1f1f1',
    padding: '20px',
  },
  sidebarButton: {
    display: 'block',
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px',
    marginBottom: '10px',
    width: '100%',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  mainContent: {
    width: '60%',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  blogPost: {
    backgroundColor: 'white',
    padding: '15px',
    marginBottom: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  rightSidebar: {
    width: '20%',
    backgroundColor: '#f1f1f1',
    padding: '20px',
  },
};

export default App;