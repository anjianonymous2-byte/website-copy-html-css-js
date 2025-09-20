# Here are your Instructions

# SPIRO MULTI ACTIVITIES - Modern Pharmaceutical Website

A modern, professional website for SPIRO MULTI ACTIVITIES pharmaceutical company built with React.js and FastAPI. This website showcases pharmaceutical expertise, cold chain logistics, and comprehensive healthcare solutions.

# Website Preview: https://form-fix-7.preview.emergentagent.com/

## 🌟 Features

- **Modern Design**: Clean, professional pharmaceutical industry design
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: 
  - Image sliders for facility showcases
  - Infinite scrolling client logos
  - Smooth navigation and animations
- **Professional Sections**:
  - Hero section with geometric design elements
  - Statistics counters (products, employees, experience)
  - CEO profile with motivational quotes
  - Mission, Vision & Values with images
  - Product categories with icons and descriptions
  - Regulatory compliance badges
  - Facilities showcase with image carousels
  - Contact form (currently with mock data)

## 🎨 Brand Colors Used

- **Background**: #fefee2 (Light cream)
- **Primary**: #f8d041 (Golden yellow)
- **Secondary**: #23ec6f (Vibrant green)
- **Tertiary**: #44ddf5 (Sky blue)
- **Text**: #2f3631 (Dark green)

## 📋 Prerequisites

Before you begin, make sure you have the following installed on your computer:

### For Windows Users:
1. **Node.js** (version 16 or higher)
   - Download from: https://nodejs.org/
   - Choose the "LTS" version (recommended)
   - Run the installer and follow the setup wizard

2. **Python** (version 3.8 or higher)
   - Download from: https://www.python.org/downloads/
   - **IMPORTANT**: During installation, check "Add Python to PATH"

3. **Git** (for downloading the project)
   - Download from: https://git-scm.com/download/win
   - Use default settings during installation

### For Mac Users:
1. **Node.js**: Download from https://nodejs.org/
2. **Python**: Usually pre-installed, or download from https://www.python.org/
3. **Git**: Usually pre-installed, or download from https://git-scm.com/

### For Linux Users:
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm python3 python3-pip git

# CentOS/RHEL
sudo yum install nodejs npm python3 python3-pip git
```

## 🚀 Installation & Setup

### Step 1: Download the Project

1. **Option A: Download ZIP**
   - Click the green "Code" button on GitHub
   - Select "Download ZIP"
   - Extract the ZIP file to your desired location

2. **Option B: Using Git (Recommended)**
   ```bash
   git clone https://github.com/yourusername/spiro-pharmaceutical-website.git
   cd spiro-pharmaceutical-website
   ```

### Step 2: Open Terminal/Command Prompt

**For Windows:**
- Press `Windows Key + R`
- Type `cmd` and press Enter
- Navigate to your project folder: `cd path\	o\\your\\project`

**For Mac/Linux:**
- Press `Cmd + Space` (Mac) or `Ctrl + Alt + T` (Linux)
- Navigate to your project folder: `cd path/to/your/project`

### Step 3: Install Frontend Dependencies

```bash
# Navigate to frontend folder
cd frontend

# Install required packages (this may take a few minutes)
npm install
# OR if you have yarn installed
yarn install
```

### Step 4: Install Backend Dependencies

```bash
# Go back to main folder
cd ..

# Navigate to backend folder
cd backend

# Install Python packages
pip install -r requirements.txt
```

## 🏃\u200d♂️ Running the Website

### Method 1: Run Both Frontend and Backend Separately

**Terminal 1 - Start the Backend:**
```bash
cd backend
python -m uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

**Terminal 2 - Start the Frontend:**
```bash
cd frontend
npm start
# OR
yarn start
```

### Method 2: Using the Provided Scripts (if available)

```bash
# Start both frontend and backend together
npm run dev
```

## 🌐 Accessing Your Website

After running the commands above:

1. **Frontend**: Open your web browser and go to `http://localhost:3000`
2. **Backend API**: Available at `http://localhost:8001`

You should see the SPIRO MULTI ACTIVITIES website loading in your browser!

## 📁 Project Structure

```
spiro-pharmaceutical-website/
├── frontend/                 # React.js frontend application
│   ├── public/              # Static files
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Header.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── CountersSection.jsx
│   │   │   ├── EnhancedAboutSection.jsx
│   │   │   ├── EnhancedExpertiseSection.jsx
│   │   │   ├── EnhancedWhyChooseUsSection.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/           # Main pages
│   │   ├── hooks/           # Custom React hooks
│   │   └── App.js           # Main application file
│   ├── package.json         # Frontend dependencies
│   └── tailwind.config.js   # Styling configuration
├── backend/                 # FastAPI backend application
│   ├── server.py           # Main backend server
│   ├── requirements.txt    # Python dependencies
│   └── .env                # Environment variables
└── README.md               # This file
```

## 🛠️ Customization Guide

### Changing Company Information

1. **Company Details**: Edit `/frontend/src/components/EnhancedAboutSection.jsx`
2. **Contact Information**: Edit `/frontend/src/components/ContactSection.jsx` and `/frontend/src/components/Footer.jsx`
3. **CEO Information**: Edit `/frontend/src/components/EnhancedAboutSection.jsx` (CEO section)

### Changing Colors

1. Open any component file (e.g., `/frontend/src/components/HeroSection.jsx`)
2. Look for `style={{ backgroundColor: '#f8d041' }}` or similar
3. Replace the color codes with your preferred colors:
   - `#fefee2` - Background color
   - `#f8d041` - Primary (yellow)
   - `#23ec6f` - Secondary (green)
   - `#44ddf5` - Tertiary (blue)
   - `#2f3631` - Text color

### Adding Your Own Images

1. **CEO Image**: Replace the image URL in `/frontend/src/components/EnhancedAboutSection.jsx`
2. **Product Images**: Edit the `therapeuticAreas` array in `/frontend/src/components/EnhancedExpertiseSection.jsx`
3. **Facility Images**: Edit the `capabilities` array in `/frontend/src/components/EnhancedWhyChooseUsSection.jsx`

### Changing Statistics/Counters

Edit `/frontend/src/components/CountersSection.jsx` and modify the `counters` array:

```javascript
const counters = [
  {
    icon: <Package className="w-8 h-8" />,
    number: "YOUR_NUMBER",
    label: "YOUR_LABEL",
    color: '#f8d041'
  },
  // Add more counters...
];
```

## 🔧 Troubleshooting

### Common Issues:

**Issue 1: "npm is not recognized" or "node is not found"**
- **Solution**: Reinstall Node.js and make sure to restart your terminal

**Issue 2: "python is not recognized"**
- **Solution**: Reinstall Python and check "Add Python to PATH" during installation

**Issue 3: Port already in use**
- **Solution**: 
  ```bash
  # Kill processes using the ports
  # Windows:
  netstat -ano | findstr :3000
  taskkill /PID [PID_NUMBER] /F
  
  # Mac/Linux:
  lsof -ti:3000 | xargs kill -9
  ```

**Issue 4: Website not loading**
- Check if both frontend and backend are running
- Make sure you're accessing `http://localhost:3000`
- Check the terminal for any error messages

**Issue 5: Images not displaying**
- Check your internet connection (images are loaded from external URLs)
- Replace image URLs with local images if needed

### Getting Help:

1. **Check the terminal output** for error messages
2. **Restart both frontend and backend** servers
3. **Clear browser cache** (Ctrl+F5 or Cmd+Shift+R)
4. **Check that all dependencies are installed** correctly

## 📸 Screenshots

### Desktop View
- Hero Section with geometric design
- Statistics counters showing company metrics
- CEO profile with professional image
- Mission, Vision & Values with healthcare images
- Product categories with icons and descriptions
- Interactive facility image sliders
- Infinite scrolling client logos

### Mobile View
- Responsive design that works on all screen sizes
- Mobile-friendly navigation menu
- Optimized images and content layout

## 🚀 Deployment (Advanced)

To deploy this website to the internet, you can use services like:

1. **Vercel** (Recommended for beginners)
2. **Netlify**
3. **Heroku**
4. **AWS**

Detailed deployment instructions would be provided separately for advanced users.

## 📞 Support & Contact

If you need help or have questions:

1. **Create an issue** on the GitHub repository
2. **Check the troubleshooting section** above
3. **Contact the development team** at your email

## 📝 License

This project is created for SPIRO MULTI ACTIVITIES pharmaceutical company. All rights reserved.

---

## 🎯 Quick Start Checklist

- [ ] Install Node.js
- [ ] Install Python
- [ ] Download/clone the project
- [ ] Run `npm install` in the frontend folder
- [ ] Run `pip install -r requirements.txt` in the backend folder
- [ ] Start the backend server
- [ ] Start the frontend server
- [ ] Open `http://localhost:3000` in your browser
- [ ] Enjoy your pharmaceutical website!

---

**Made with ❤️ for SPIRO MULTI ACTIVITIES**

*Last updated: July 2025*
