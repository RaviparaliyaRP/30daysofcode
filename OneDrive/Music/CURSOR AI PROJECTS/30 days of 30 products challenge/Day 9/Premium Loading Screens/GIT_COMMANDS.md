# Git Push Commands for LoadMaster Repository

## Step-by-Step Commands

### Step 1: Navigate to Project Directory
```powershell
cd "C:\Users\PARALIYA RAVI\OneDrive\Music\CURSOR AI PROJECTS\30 days of 30 products challenge\Day 9\Premium Loading Screens"
```

### Step 2: Check if Git is Initialized
```powershell
Test-Path .git
```

### Step 3: Initialize Git (if not already initialized)
```powershell
git init
```

### Step 4: Create/Update .gitignore (to exclude node_modules)
```powershell
@"
node_modules/
dist/
.DS_Store
*.log
.env.local
"@ | Out-File -FilePath .gitignore -Encoding utf8
```

### Step 5: Add All Files
```powershell
git add .
```

### Step 6: Commit Changes
```powershell
git commit -m "Initial commit: Premium Loading Screens - 60 Brand-Level Loaders"
```

### Step 7: Add LoadMaster Remote
```powershell
git remote add origin https://github.com/RaviparaliyaRP/LoadMaster.git
```

**Note:** Agar remote already hai aur different URL pe, to pehle remove karein:
```powershell
git remote remove origin
git remote add origin https://github.com/RaviparaliyaRP/LoadMaster.git
```

### Step 8: Check Remote
```powershell
git remote -v
```

### Step 9: Push to GitHub
```powershell
git branch -M main
git push -u origin main
```

## Alternative: Agar Repository Already Exists

Agar repository already initialized hai aur aap sirf changes push karna chahte hain:

```powershell
# Navigate to project
cd "C:\Users\PARALIYA RAVI\OneDrive\Music\CURSOR AI PROJECTS\30 days of 30 products challenge\Day 9\Premium Loading Screens"

# Check status
git status

# Add all changes
git add .

# Commit
git commit -m "Update: Removed Get Component button and improved loading animations"

# Check remote
git remote -v

# Update remote if needed
git remote set-url origin https://github.com/RaviparaliyaRP/LoadMaster.git

# Push
git push -u origin main
```

## Troubleshooting

### Agar "remote origin already exists" error aaye:
```powershell
git remote remove origin
git remote add origin https://github.com/RaviparaliyaRP/LoadMaster.git
```

### Agar authentication required ho:
GitHub pe Personal Access Token use karein ya GitHub Desktop se authenticate karein.

### Agar push reject ho:
```powershell
git pull origin main --allow-unrelated-histories
git push -u origin main
```

