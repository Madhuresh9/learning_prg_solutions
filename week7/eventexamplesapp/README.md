# React Event Handling and Currency Converter App

This is a hands-on ReactJS project that demonstrates the use of event handling, synthetic events, functional/class components, and a simple form-based currency converter.

## 📌 Project Title

**eventexamplesapp**

## 🎯 Objective

This project showcases:

- Basic and advanced **event handling** in React
- Use of the `this` keyword in class components
- **Synthetic events** in React
- Passing **arguments to event handlers**
- Handling **form inputs**
- Performing **real-time conversions** using controlled components
- Displaying data using **alert popups**

---

## 🛠️ Technologies Used

- ReactJS (with Create React App)
- JavaScript (ES6+)
- JSX
- Node.js & npm

---

## ✅ Features Implemented

### 1. **Increment & Decrement Counter**
- Built using a **class component**
- `Increment` button triggers:
  - An increase in the counter
  - A `sayHello()` method which prints a greeting to console
- `Decrement` button reduces the count
- Demonstrates use of `this` binding in event handlers

### 2. **Say Welcome Button**
- A stateless functional component with a button that:
  - Calls a function with a string argument
  - Displays `alert("Welcome to React!")`
- Demonstrates **passing parameters** to event handlers

### 3. **Synthetic Event Handling**
- A button that demonstrates React’s **SyntheticEvent** abstraction by:
  - Handling `onClick`
  - Preventing default behavior
  - Showing an alert: **“I was clicked”**

### 4. **Currency Converter**
- A fully functional form that:
  - Accepts **INR** amount as input
  - Converts the amount to **Euro** on clicking **Submit**
  - Displays a pop-up with the converted amount (`alert`)
- Conversion logic: `INR / 0.0125` (i.e., 1 Euro = ₹80)
- Output is shown as: `Converting to Euro Amount is 6400`
- Displays a read-only input labeled `Currency: Euro`

---

## 📷 UI Preview

![Currency Converter Output](screenshots/currency-converter.png)

> Heading in green: “Currency Convertor!!!”  
> Alert box pops up on submit with the converted Euro value.

---

## 📂 Folder Structure

