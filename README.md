## Web Application powered by Django 
### How to set the environment and run the application ?

### 1• Clone the Repository
` git clone <repository_url> `
 
### 2• Navigate to the Project Directory
` cd django_web_app `
![image](https://github.com/user-attachments/assets/a484a953-f974-47b3-b0d6-7d693a3060e2)

### 3• Activate the Virtual Environment
` pipenv shell `
![image](https://github.com/user-attachments/assets/c3989031-ed25-419b-b058-8947a6ae95a0)

### 4• Install Dependencies (if not already installed)
` pipenv install `

### 5• Apply Migrations (Ensure the database is up to date)
` python3 manage.py migrate `

### 6• Run the Development Server
` python3 manage.py runserver 8080 `

### NOTE!! after following the steps to make sure the server is up you will end up with this
![image](https://github.com/user-attachments/assets/343a6012-9d79-4b46-94c9-d638ade123ff)


# 📘 Project Documentation  

## 🚀 Tech Stack & Dependencies  

To run this application successfully, ensure you have the following stack installed on your system:  

### **🖥️ Environment**  
- **WSL (Windows Subsystem for Linux) or a Linux-based OS**  

### **🔧 Required Packages & Dependencies**  
- **Python 3** (Programming Language)  
- **Django** (Web Framework)  
- **Bootstrap 4** (Front-end Framework)  
- **Pillow** (Image Processing Library)  
- **Pipenv** (Virtual Environment & Package Management)  

---

## 📥 Installation Guide  

Follow these steps to install the required stack and dependencies:  

### **1️⃣ Install WSL (if using Windows) and some helpfull commands**  
For Windows users, install **WSL** and set up a Linux distribution (Ubuntu recommended):  
```bash
wsl --install

python3 --version  # Check if Python is installed
sudo apt update && sudo apt install python3 -y  # Install Python 3 if missing


sudo apt install python3-pip -y  # Install pip
pip3 install --user pipenv  # Install Pipenv


pipenv shell  # Activate virtual environment
pipenv install django  # Install Django


pipenv install django-bootstrap4

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">



