# AttendSync — WhatsApp Attendance Checker

> Instantly verify class attendance by parsing WhatsApp group chat exports against a student roster.

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

---

## ✨ What It Does

AttendSync lets you **paste an exported WhatsApp group chat** and automatically cross-references every sender against a pre-loaded student roster (I CSE Cyber Security — 62 students). In seconds you get:

- ✅ **Sent** — students whose names appear in the chat
- ❌ **Missing** — students who haven't responded
- ✏️ **Manually Marked** — students you mark as present by hand
- ❓ **Unknown Contacts** — phone numbers that don't match any roster entry

---

## 🖼️ Features

| Feature                  | Description                                                                      |
| ------------------------ | -------------------------------------------------------------------------------- |
| **Chat Parsing**         | Regex-based extraction of sender names from standard WhatsApp export format      |
| **Date Filtering**       | Filter messages to a specific date so you only check today's responses           |
| **Custom Roster Upload** | Upload your own CSV / text roster instead of the default class list              |
| **Manual Marking**       | Click any missing student to manually mark them as present (click again to undo) |
| **Copy Lists**           | One-click copy of Sent, Missing, or Marked lists to clipboard                    |
| **Search & Filter**      | Real-time search across all result columns by name or ID                         |
| **Roster Directory**     | Full-page grid view of all students with live attendance status badges           |
| **Analytics Tab**        | Visual breakdown with response rate, category bars, and missing student list     |
| **Dark Mode**            | Toggle between light and dark themes from the settings dropdown                  |
| **Responsive UI**        | Works on desktop and mobile with a modern Material Design 3 aesthetic            |

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/ys077/whatsapp-attendance-checker.git
cd whatsapp-attendance-checker

# Start the server
npm start
```

Open your browser at **http://localhost:3000**

> No `npm install` needed — the server uses only Node.js built-in modules (`http`, `fs`, `path`).

---

## 📖 How to Use

1. **Open** your WhatsApp group → tap **⋮ More** → **Export Chat** (without media)
2. **Copy** the exported text
3. **Paste** it into the textarea on the Dashboard
4. **Set the date** (defaults to today) to filter messages for that day
5. Click **Check Attendance** — results appear instantly

### Optional: Custom Roster

Upload a `.csv` or `.txt` file with one student per line:

```
SIT24SC001, Srikanth R J
SIT24SC002, Manusri M V
```

Or just names (IDs will be auto-generated):

```
Srikanth R J
Manusri M V
```

---

## 🗂️ Project Structure

```
whatsapp-attendance-checker/
├── index.html      # Main UI — Dashboard, Roster & Analytics tabs
├── styles.css      # Custom CSS (M3 color tokens, animations, scrollbar)
├── app.js          # Core application logic (minified variant)
├── script.js       # Core application logic (formatted variant)
├── server.js       # Lightweight Node.js static file server
├── package.json    # npm metadata & start script
└── README.md       # You are here
```

---

## 🛠️ Tech Stack

- **Frontend:** Vanilla HTML, CSS, JavaScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (CDN) + custom CSS variables (Material Design 3 color system)
- **Icons:** [Material Symbols](https://fonts.google.com/icons)
- **Fonts:** Bricolage Grotesque, Plus Jakarta Sans, JetBrains Mono, Epilogue, Space Grotesk
- **Server:** Node.js built-in `http` module (zero dependencies)

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---
