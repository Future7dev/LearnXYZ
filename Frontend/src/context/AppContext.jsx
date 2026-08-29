import React, { createContext, useContext, useReducer } from 'react';
import { roadmaps, userProfile } from '../data/mockData';

const AppContext = createContext(null);

const initialState = {
  user: userProfile,
  isAuthenticated: false,
  roadmaps: roadmaps,
  topicProgress: {
    'html-basics': 'completed', 'css-basics': 'completed',
    'flexbox': 'completed', 'responsive': 'completed',
    'js-vars': 'completed', 'js-functions': 'completed',
    'js-async': 'in-progress',
    'react-basics': 'in-progress',
    'math-foundations': 'completed',
    'linear-algebra': 'completed', 'calculus': 'completed',
    'probability': 'in-progress',
    'numpy': 'completed',
    'matplotlib': 'in-progress',
    'array-basics': 'completed', 'two-pointer': 'completed', 'sliding-window': 'completed',
    'll-basics': 'completed', 'll-ops': 'in-progress',
  },
  uploadedSyllabi: [
    { id: 'web-dev', title: 'Full-Stack Web Development', uploadedAt: '2026-08-10', progress: 42 },
    { id: 'ml-ai',  title: 'Machine Learning & AI',      uploadedAt: '2026-08-15', progress: 28 },
    { id: 'dsa',    title: 'Data Structures & Algorithms',uploadedAt: '2026-08-20', progress: 35 },
  ],
  quizResults: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true, user: { ...state.user, ...action.payload } };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false };
    case 'SIGNUP':
      return { ...state, isAuthenticated: true, user: { ...state.user, name: action.payload.name, email: action.payload.email } };
    case 'MARK_TOPIC':
      return { ...state, topicProgress: { ...state.topicProgress, [action.payload.id]: action.payload.status } };
    case 'ADD_SYLLABUS':
      return {
        ...state,
        uploadedSyllabi: [action.payload, ...state.uploadedSyllabi],
      };
    case 'SAVE_QUIZ_RESULT':
      return { ...state, quizResults: [action.payload, ...state.quizResults] };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be inside AppProvider');
  return ctx;
}
