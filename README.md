# Autochek User Dashboard

A responsive, accessible user dashboard built with React, TypeScript, Vite, and Tailwind CSS. It features user listing, search/filter, analytics, theming, i18n, Storybook documentation, and robust testing.

---

## 🚀 Features

- **User List with Pagination**: Paginated list of users with name, email, and company.
- **User Detail Modal**: Click a user to view details in an accessible modal.
- **Search & Filter**: Search by name/email, filter by company or location.
- **Interactive Analytics**: Line chart (Recharts) with dummy user stats.
- **Dark/Light Theme Toggle**: Toggle theme, respects system preference, persists choice.
- **Internationalization (i18n)**: Ready for multiple languages (react-i18next).
- **Accessibility**: ARIA labels, keyboard navigation, focus management.
- **Responsive Design**: Mobile and desktop friendly (Tailwind CSS).
- **Loading & Error States**: Graceful handling of async states.
- **Testing**: Unit/integration tests (Vitest + React Testing Library).
- **Storybook**: Component documentation and playground.

---

## 🛠️ Tech Stack

- **React** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (utility-first styling)
- **@tanstack/react-query** (data fetching/caching)
- **Recharts** (charts)
- **react-i18next** (i18n)
- **@headlessui/react** (accessible modal)
- **Vitest** + **React Testing Library** (testing)
- **Storybook** (component docs)

---

## 📦 Setup & Installation

1. **Clone the repo:**
   ```sh
   git clone <repo-url>
   cd autochek-test
   ```
2. **Install dependencies:**
   ```sh
   yarn
   # or
   npm install
   ```
3. **Start the dev server:**
   ```sh
   yarn dev
   # or
   npm run dev
   ```
   App runs at [http://localhost:5173](http://localhost:5173)

---

## 🧑‍💻 Usage

- **User List**: Browse, paginate, and click users for details.
- **Search/Filter**: Use the search bar and dropdowns to filter users.
- **Theme Toggle**: Switch between light/dark mode (top right).
- **Analytics**: View user stats in the chart.

---

## 🌍 Internationalization
- English is the default. Add more languages in `src/i18n/index.ts`.

---

## 🧪 Testing

- **Run all tests:**
  ```sh
  yarn test
  # or
  npx vitest
  ```
- **Test files:** Located alongside components (e.g., `UserList.test.tsx`).

---

## 📚 Storybook

- **Start Storybook:**
  ```sh
  yarn storybook
  ```
- **View at:** [http://localhost:6006](http://localhost:6006)
- Stories are in each component's `.stories.tsx` file.

---

## 🏗️ Project Structure

```
src/
  components/      # Reusable UI components
  hooks/           # Custom React hooks
  i18n/            # i18n config and translations
  mocks/           # (Optional) MSW handlers
  stories/         # (Optional) Storybook stories
  App.tsx          # Main app layout
  main.tsx         # Entry point
  index.css        # Tailwind imports
```

---

## 📝 Accessibility & Best Practices
- Keyboard navigation and ARIA labels throughout
- Focus management in modals
- Responsive and mobile-friendly
- High Lighthouse scores for performance, SEO, and accessibility

---

## 🧩 Extending
- Add more i18n languages in `src/i18n/`
- Add more tests in `src/components/*.test.tsx`
- Add more stories in `src/components/*.stories.tsx`
- Use MSW in `src/mocks/` for local API mocking

---

## 📄 License

MIT
