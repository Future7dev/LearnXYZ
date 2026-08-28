// ─── StudySphere Mock Data ────────────────────────────────────────────────────

export const roadmaps = [
  {
    id: 'web-dev',
    title: 'Full-Stack Web Development',
    description: 'From HTML basics to deploying production-grade applications.',
    category: 'Engineering',
    totalTopics: 12,
    estimatedHours: 120,
    difficulty: 'Intermediate',
    uploadedAt: '2026-08-10',
    color: '#5B5FED',
    nodes: [
      {
        id: 'html-css', title: 'HTML & CSS Fundamentals', status: 'completed', order: 1,
        subtopics: [
          {
            id: 'html-basics', title: 'HTML Structure & Semantics', status: 'completed',
            items: [
              { id: 'html-semantic', title: 'Semantic Tags (header, nav, article)', status: 'completed' },
              { id: 'html-forms', title: 'Forms, Validations & Inputs', status: 'completed' },
              { id: 'html-a11y', title: 'Accessibility & ARIA Roles', status: 'completed' }
            ]
          },
          {
            id: 'css-basics', title: 'CSS Selectors & Box Model', status: 'completed',
            items: [
              { id: 'css-specificity', title: 'Cascade, Specificity & Inheritance', status: 'completed' },
              { id: 'css-box-model', title: 'Margin, Padding, Border & Box-Sizing', status: 'completed' },
              { id: 'css-units', title: 'Rem, Em, Vh, Vw & Calc()', status: 'completed' }
            ]
          },
          {
            id: 'flexbox', title: 'Flexbox & Grid', status: 'completed',
            items: [
              { id: 'flex-align', title: 'Flex Direction, Justify & Align', status: 'completed' },
              { id: 'grid-tracks', title: 'CSS Grid Template Columns & Areas', status: 'completed' },
              { id: 'auto-fit', title: 'Auto-fill, Auto-fit & Minmax()', status: 'completed' }
            ]
          },
          {
            id: 'responsive', title: 'Responsive Design', status: 'completed',
            items: [
              { id: 'media-queries', title: 'Mobile-first Breakpoints', status: 'completed' },
              { id: 'responsive-images', title: 'Srcset & Picture Tag', status: 'completed' }
            ]
          },
        ]
      },
      {
        id: 'javascript', title: 'JavaScript Core', status: 'completed', order: 2,
        subtopics: [
          {
            id: 'js-vars', title: 'Variables, Types & Operators', status: 'completed',
            items: [
              { id: 'js-primitives', title: 'Primitives & Reference Types', status: 'completed' },
              { id: 'js-scoping', title: 'Let, Const, Var & Hoisting', status: 'completed' },
              { id: 'js-coercion', title: 'Type Coercion & Truthy/Falsy', status: 'completed' }
            ]
          },
          {
            id: 'js-functions', title: 'Functions & Scope', status: 'completed',
            items: [
              { id: 'js-closures', title: 'Closures & Lexical Environment', status: 'completed' },
              { id: 'js-arrow', title: 'Arrow Functions & "this" Binding', status: 'completed' },
              { id: 'js-higher-order', title: 'Map, Filter, Reduce & Currying', status: 'completed' }
            ]
          },
          {
            id: 'js-async', title: 'Async JS & Promises', status: 'in-progress',
            items: [
              { id: 'js-eventloop', title: 'Callstack, Microtasks & Event Loop', status: 'completed' },
              { id: 'js-promises', title: 'Promise Chaining & Promise.all', status: 'in-progress' },
              { id: 'js-async-await', title: 'Async/Await & Try/Catch Handling', status: 'not-started' }
            ]
          },
          {
            id: 'js-dom', title: 'DOM Manipulation', status: 'not-started',
            items: [
              { id: 'dom-events', title: 'Event Delegation & Bubbling', status: 'not-started' },
              { id: 'dom-mutations', title: 'Create, Modify & Remove Nodes', status: 'not-started' }
            ]
          },
        ]
      },
      {
        id: 'react', title: 'React Framework', status: 'in-progress', order: 3,
        subtopics: [
          {
            id: 'react-basics', title: 'Components & Props', status: 'in-progress',
            items: [
              { id: 'react-jsx', title: 'JSX Syntax & Expressions', status: 'completed' },
              { id: 'react-props-flow', title: 'One-way Data Flow & Prop Drilling', status: 'in-progress' },
              { id: 'react-conditional', title: 'Conditional Rendering & Lists', status: 'not-started' }
            ]
          },
          {
            id: 'react-hooks', title: 'Hooks & State Management', status: 'not-started',
            items: [
              { id: 'hook-state-effect', title: 'useState & useEffect Lifecycles', status: 'not-started' },
              { id: 'hook-refs', title: 'useRef & DOM References', status: 'not-started' },
              { id: 'hook-context', title: 'useContext & Global Stores', status: 'not-started' },
              { id: 'custom-hooks', title: 'Building Custom Reusable Hooks', status: 'not-started' }
            ]
          },
          {
            id: 'react-router', title: 'Routing & Navigation', status: 'not-started',
            items: [
              { id: 'rr-routes', title: 'Routes, Outlet & Dynamic Params', status: 'not-started' },
              { id: 'rr-protected', title: 'Auth Guards & Nested Layouts', status: 'not-started' }
            ]
          },
          {
            id: 'react-perf', title: 'Performance Optimization', status: 'not-started',
            items: [
              { id: 'perf-memo', title: 'React.memo, useMemo & useCallback', status: 'not-started' },
              { id: 'perf-lazy', title: 'Code Splitting & React.lazy', status: 'not-started' }
            ]
          },
        ]
      },
      {
        id: 'nodejs', title: 'Node.js & Express', status: 'not-started', order: 4,
        subtopics: [
          {
            id: 'node-basics', title: 'Node.js Runtime', status: 'not-started',
            items: [
              { id: 'node-modules', title: 'CommonJS vs ES Modules', status: 'not-started' },
              { id: 'node-fs', title: 'FS & Streams API', status: 'not-started' }
            ]
          },
          {
            id: 'express', title: 'Express Framework', status: 'not-started',
            items: [
              { id: 'express-router', title: 'Routing & Middleware Pipeline', status: 'not-started' },
              { id: 'express-error', title: 'Global Error Handling', status: 'not-started' }
            ]
          },
          {
            id: 'rest-api', title: 'REST API Design', status: 'not-started',
            items: [
              { id: 'rest-crud', title: 'CRUD & HTTP Status Codes', status: 'not-started' },
              { id: 'rest-validate', title: 'Zod / Joi Request Validation', status: 'not-started' }
            ]
          },
          {
            id: 'auth', title: 'Authentication & JWT', status: 'not-started',
            items: [
              { id: 'auth-bcrypt', title: 'Password Hashing with Bcrypt', status: 'not-started' },
              { id: 'auth-jwt', title: 'JWT Sign & Verify Middleware', status: 'not-started' }
            ]
          },
        ]
      },
      {
        id: 'databases', title: 'Databases', status: 'not-started', order: 5,
        subtopics: [
          {
            id: 'sql', title: 'SQL & PostgreSQL', status: 'not-started',
            items: [
              { id: 'sql-queries', title: 'Joins, Aggregations & Indexes', status: 'not-started' },
              { id: 'sql-orm', title: 'Prisma / Drizzle ORM', status: 'not-started' }
            ]
          },
          {
            id: 'mongodb', title: 'MongoDB & Mongoose', status: 'not-started',
            items: [
              { id: 'mongo-schema', title: 'Schemas & Subdocuments', status: 'not-started' },
              { id: 'mongo-agg', title: 'Aggregation Pipelines', status: 'not-started' }
            ]
          },
          {
            id: 'redis', title: 'Redis & Caching', status: 'not-started',
            items: [
              { id: 'redis-cache', title: 'In-memory Key-Value Caching', status: 'not-started' }
            ]
          },
        ]
      },
      {
        id: 'deployment', title: 'Deployment & DevOps', status: 'not-started', order: 6,
        subtopics: [
          {
            id: 'git', title: 'Git & Version Control', status: 'not-started',
            items: [
              { id: 'git-branching', title: 'Branching, Rebase & PR Reviews', status: 'not-started' }
            ]
          },
          {
            id: 'docker', title: 'Docker & Containers', status: 'not-started',
            items: [
              { id: 'dockerfile', title: 'Dockerfiles & Multi-stage Builds', status: 'not-started' },
              { id: 'docker-compose', title: 'Docker Compose Orchestration', status: 'not-started' }
            ]
          },
          {
            id: 'ci-cd', title: 'CI/CD Pipelines', status: 'not-started',
            items: [
              { id: 'gh-actions', title: 'GitHub Actions Automated Testing', status: 'not-started' }
            ]
          },
          {
            id: 'cloud', title: 'Cloud Deployment', status: 'not-started',
            items: [
              { id: 'cloud-deploy', title: 'Deploying on Vercel, Render & AWS', status: 'not-started' }
            ]
          },
        ]
      },
    ]
  },
  {
    id: 'ml-ai',
    title: 'Machine Learning & AI',
    description: 'Core ML algorithms, deep learning, and practical AI applications.',
    category: 'Data Science',
    totalTopics: 10,
    estimatedHours: 150,
    difficulty: 'Advanced',
    uploadedAt: '2026-08-15',
    color: '#34D399',
    nodes: [
      {
        id: 'math-foundations', title: 'Mathematical Foundations', status: 'completed', order: 1,
        subtopics: [
          {
            id: 'linear-algebra', title: 'Linear Algebra', status: 'completed',
            items: [
              { id: 'la-vectors', title: 'Vectors & Matrix Multiplications', status: 'completed' },
              { id: 'la-eigen', title: 'Eigenvalues & Eigenvectors', status: 'completed' }
            ]
          },
          {
            id: 'calculus', title: 'Calculus & Differentiation', status: 'completed',
            items: [
              { id: 'calc-gradients', title: 'Partial Derivatives & Gradients', status: 'completed' },
              { id: 'calc-chain', title: 'Chain Rule & Backpropagation Math', status: 'completed' }
            ]
          },
          {
            id: 'probability', title: 'Probability & Statistics', status: 'in-progress',
            items: [
              { id: 'prob-bayes', title: 'Bayes Theorem & Distributions', status: 'completed' },
              { id: 'prob-variance', title: 'Mean, Variance & Hypothesis Tests', status: 'in-progress' }
            ]
          },
        ]
      },
      {
        id: 'python-ml', title: 'Python for ML', status: 'in-progress', order: 2,
        subtopics: [
          {
            id: 'numpy', title: 'NumPy & Pandas', status: 'completed',
            items: [
              { id: 'np-arrays', title: 'N-Dimensional Array Operations', status: 'completed' },
              { id: 'pd-dataframes', title: 'DataFrame Cleaning & Manipulation', status: 'completed' }
            ]
          },
          {
            id: 'matplotlib', title: 'Data Visualization', status: 'in-progress',
            items: [
              { id: 'plot-charts', title: 'Seaborn & Matplotlib Plots', status: 'in-progress' }
            ]
          },
          {
            id: 'sklearn', title: 'Scikit-Learn', status: 'not-started',
            items: [
              { id: 'skl-pipeline', title: 'Preprocessing & Feature Pipelines', status: 'not-started' }
            ]
          },
        ]
      },
      {
        id: 'supervised', title: 'Supervised Learning', status: 'not-started', order: 3,
        subtopics: [
          {
            id: 'regression', title: 'Linear & Logistic Regression', status: 'not-started',
            items: [
              { id: 'reg-cost', title: 'Cost Functions & Gradient Descent', status: 'not-started' }
            ]
          },
          {
            id: 'decision-trees', title: 'Decision Trees & Random Forests', status: 'not-started',
            items: [
              { id: 'tree-entropy', title: 'Entropy & Information Gain', status: 'not-started' }
            ]
          },
          {
            id: 'svm', title: 'Support Vector Machines', status: 'not-started',
            items: [
              { id: 'svm-kernels', title: 'Hyperplanes & Kernel Trick', status: 'not-started' }
            ]
          },
        ]
      },
      {
        id: 'deep-learning', title: 'Deep Learning', status: 'not-started', order: 4,
        subtopics: [
          {
            id: 'neural-nets', title: 'Neural Networks', status: 'not-started',
            items: [
              { id: 'nn-layers', title: 'Perceptrons, Activations & Dense Layers', status: 'not-started' }
            ]
          },
          {
            id: 'cnn', title: 'Convolutional Neural Networks', status: 'not-started',
            items: [
              { id: 'cnn-filters', title: 'Convolutions, Pooling & Feature Maps', status: 'not-started' }
            ]
          },
          {
            id: 'rnn', title: 'RNNs & LSTMs', status: 'not-started',
            items: [
              { id: 'rnn-seq', title: 'Sequence Modeling & Memory Cells', status: 'not-started' }
            ]
          },
          {
            id: 'transformers', title: 'Transformers & Attention', status: 'not-started',
            items: [
              { id: 'trans-attention', title: 'Self-Attention & Multi-Head Heads', status: 'not-started' }
            ]
          },
        ]
      },
    ]
  },
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    description: 'Master DSA for coding interviews and competitive programming.',
    category: 'Computer Science',
    totalTopics: 14,
    estimatedHours: 100,
    difficulty: 'Intermediate',
    uploadedAt: '2026-08-20',
    color: '#F0B429',
    nodes: [
      {
        id: 'arrays', title: 'Arrays & Strings', status: 'completed', order: 1,
        subtopics: [
          {
            id: 'array-basics', title: 'Array Traversal & Patterns', status: 'completed',
            items: [
              { id: 'arr-prefix', title: 'Prefix Sums & Kadane\'s Algorithm', status: 'completed' }
            ]
          },
          {
            id: 'two-pointer', title: 'Two Pointer Technique', status: 'completed',
            items: [
              { id: 'tp-converging', title: 'Converging Pointers & In-Place Swaps', status: 'completed' }
            ]
          },
          {
            id: 'sliding-window', title: 'Sliding Window', status: 'completed',
            items: [
              { id: 'sw-dynamic', title: 'Fixed vs Dynamic Window Sizes', status: 'completed' }
            ]
          },
        ]
      },
      {
        id: 'linked-lists', title: 'Linked Lists', status: 'in-progress', order: 2,
        subtopics: [
          {
            id: 'll-basics', title: 'Singly & Doubly Linked Lists', status: 'completed',
            items: [
              { id: 'll-node-struct', title: 'Node Pointers & Traversal', status: 'completed' }
            ]
          },
          {
            id: 'll-ops', title: 'Reversal, Merge, Cycle Detection', status: 'in-progress',
            items: [
              { id: 'll-floyd', title: 'Floyd\'s Tortoise & Hare Cycle Finding', status: 'in-progress' }
            ]
          },
        ]
      },
      {
        id: 'trees', title: 'Trees & Graphs', status: 'not-started', order: 3,
        subtopics: [
          {
            id: 'bst', title: 'Binary Search Trees', status: 'not-started',
            items: [
              { id: 'bst-inorder', title: 'Inorder, Preorder & Postorder', status: 'not-started' }
            ]
          },
          {
            id: 'bfs-dfs', title: 'BFS & DFS', status: 'not-started',
            items: [
              { id: 'bfs-queue', title: 'Level Order Queue Traversal', status: 'not-started' }
            ]
          },
          {
            id: 'graph-algos', title: 'Dijkstra, Bellman-Ford', status: 'not-started',
            items: [
              { id: 'graph-shortest', title: 'Shortest Path & Priority Queues', status: 'not-started' }
            ]
          },
        ]
      },
      {
        id: 'dp', title: 'Dynamic Programming', status: 'not-started', order: 4,
        subtopics: [
          {
            id: 'dp-basics', title: 'Memoization & Tabulation', status: 'not-started',
            items: [
              { id: 'dp-fib', title: 'Top-Down Memo vs Bottom-Up Table', status: 'not-started' }
            ]
          },
          {
            id: 'dp-patterns', title: 'DP Patterns (Knapsack, LCS)', status: 'not-started',
            items: [
              { id: 'dp-knapsack', title: '0/1 Knapsack & Unbounded Subsets', status: 'not-started' }
            ]
          },
        ]
      },
    ]
  }
];

export const topicDetails = {
  'react': {
    id: 'react',
    title: 'React Framework',
    description: 'Learn React — the world\'s most popular UI library for building component-based, reactive user interfaces.',
    roadmapId: 'web-dev',
    progress: 25,
    videos: [
      {
        id: 'v1',
        title: 'React Tutorial for Beginners – Full Course',
        channel: 'Programming with Mosh',
        duration: '2:21:10',
        thumbnail: 'https://img.youtube.com/vi/SqcY0GlETPk/maxresdefault.jpg',
        youtubeId: 'SqcY0GlETPk',
      },
      {
        id: 'v2',
        title: 'React Hooks Explained – useState, useEffect & More',
        channel: 'Fireship',
        duration: '11:22',
        thumbnail: 'https://img.youtube.com/vi/TNhaISOUy6Q/maxresdefault.jpg',
        youtubeId: 'TNhaISOUy6Q',
      },
      {
        id: 'v3',
        title: 'React Router v6 — Complete Guide',
        channel: 'Web Dev Simplified',
        duration: '49:38',
        thumbnail: 'https://img.youtube.com/vi/Ul3y1LXxzdU/maxresdefault.jpg',
        youtubeId: 'Ul3y1LXxzdU',
      },
    ],
    resources: [
      { id: 'r1', title: 'Official React Documentation', type: 'docs', url: 'https://react.dev', description: 'The new official React docs with interactive examples.' },
      { id: 'r2', title: 'React Patterns', type: 'article', url: 'https://reactpatterns.com', description: 'Common React patterns and best practices.' },
      { id: 'r3', title: 'useHooks.com', type: 'tool', url: 'https://usehooks.com', description: 'A collection of useful custom React hooks.' },
      { id: 'r4', title: 'Awesome React', type: 'article', url: 'https://github.com/enaqx/awesome-react', description: 'Curated list of React resources, tools, and libraries.' },
    ],
    subtopics: [
      { id: 'react-basics', title: 'Components & Props', status: 'in-progress', description: 'Understand React components, JSX syntax, and how to pass data with props.' },
      { id: 'react-hooks', title: 'Hooks & State Management', status: 'not-started', description: 'Master useState, useEffect, useContext, and custom hooks.' },
      { id: 'react-router', title: 'Routing & Navigation', status: 'not-started', description: 'Build multi-page applications with React Router v6.' },
      { id: 'react-perf', title: 'Performance Optimization', status: 'not-started', description: 'useMemo, useCallback, code splitting, and lazy loading.' },
    ]
  },
  'javascript': {
    id: 'javascript',
    title: 'JavaScript Core',
    description: 'Master the language of the web — from fundamentals to advanced async patterns.',
    roadmapId: 'web-dev',
    progress: 75,
    videos: [
      {
        id: 'v1',
        title: 'JavaScript Full Course for Beginners',
        channel: 'freeCodeCamp',
        duration: '8:00:00',
        thumbnail: 'https://img.youtube.com/vi/PkZNo7MFNFg/maxresdefault.jpg',
        youtubeId: 'PkZNo7MFNFg',
      },
      {
        id: 'v2',
        title: 'Async JavaScript – Promises, Async/Await',
        channel: 'Traversy Media',
        duration: '25:52',
        thumbnail: 'https://img.youtube.com/vi/PoRJizFvM7s/maxresdefault.jpg',
        youtubeId: 'PoRJizFvM7s',
      },
    ],
    resources: [
      { id: 'r1', title: 'MDN Web Docs — JavaScript', type: 'docs', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', description: 'The definitive JavaScript reference.' },
      { id: 'r2', title: 'JavaScript.info', type: 'article', url: 'https://javascript.info', description: 'Modern JavaScript tutorial from basics to advanced.' },
      { id: 'r3', title: 'You Don\'t Know JS', type: 'article', url: 'https://github.com/getify/You-Dont-Know-JS', description: 'Deep dive book series into JavaScript mechanics.' },
    ],
    subtopics: [
      { id: 'js-vars', title: 'Variables, Types & Operators', status: 'completed', description: 'var, let, const, type coercion, and operators.' },
      { id: 'js-functions', title: 'Functions & Scope', status: 'completed', description: 'Closures, hoisting, arrow functions, and lexical scope.' },
      { id: 'js-async', title: 'Async JS & Promises', status: 'in-progress', description: 'Callbacks, Promises, async/await, and the event loop.' },
      { id: 'js-dom', title: 'DOM Manipulation', status: 'not-started', description: 'Querying, modifying, and animating DOM elements.' },
    ]
  }
};

export const quizzes = {
  'react': {
    id: 'react-quiz',
    title: 'React Framework Quiz',
    topicId: 'react',
    timePerQuestion: 30,
    questions: [
      {
        id: 'q1',
        question: 'What does JSX stand for?',
        options: ['JavaScript XML', 'JavaScript Extension', 'Java Syntax XML', 'JSON XML'],
        correctIndex: 0,
        explanation: 'JSX stands for JavaScript XML. It allows writing HTML-like syntax inside JavaScript.'
      },
      {
        id: 'q2',
        question: 'Which hook is used to manage side effects in React?',
        options: ['useState', 'useReducer', 'useEffect', 'useContext'],
        correctIndex: 2,
        explanation: 'useEffect is the hook for managing side effects like data fetching, subscriptions, or DOM mutations.'
      },
      {
        id: 'q3',
        question: 'What is the correct way to pass data from parent to child component?',
        options: ['Via state', 'Via props', 'Via context only', 'Via refs'],
        correctIndex: 1,
        explanation: 'Props (properties) are the standard way to pass data from a parent component to a child component.'
      },
      {
        id: 'q4',
        question: 'What does the second argument to useEffect do?',
        options: ['Runs the effect once', 'Is the cleanup function', 'Controls when the effect runs (dependency array)', 'Sets initial state'],
        correctIndex: 2,
        explanation: 'The dependency array (second argument) controls when the effect re-runs. Empty array [] means run only once.'
      },
      {
        id: 'q5',
        question: 'Which React feature allows you to use state in function components?',
        options: ['Class components', 'HOCs', 'Hooks', 'Refs'],
        correctIndex: 2,
        explanation: 'React Hooks (introduced in React 16.8) allow function components to use state and other React features.'
      },
    ]
  },
  'javascript': {
    id: 'js-quiz',
    title: 'JavaScript Core Quiz',
    topicId: 'javascript',
    timePerQuestion: 25,
    questions: [
      {
        id: 'q1',
        question: 'What is the difference between == and === in JavaScript?',
        options: ['No difference', '== checks type too, === does not', '=== checks value and type, == only checks value', '== is assignment'],
        correctIndex: 2,
        explanation: '=== is strict equality checking both value and type. == uses type coercion before comparison.'
      },
      {
        id: 'q2',
        question: 'What does "hoisting" mean in JavaScript?',
        options: ['Moving code to a server', 'Variable and function declarations are moved to the top of scope', 'Async function execution', 'DOM rendering priority'],
        correctIndex: 1,
        explanation: 'Hoisting is JavaScript\'s behavior of moving declarations to the top of the current scope before execution.'
      },
      {
        id: 'q3',
        question: 'What is a closure in JavaScript?',
        options: ['A function that closes the browser', 'A function that has access to its outer scope variables', 'An IIFE pattern', 'A terminator function'],
        correctIndex: 1,
        explanation: 'A closure is a function that retains access to its lexical scope (outer variables) even after the outer function returns.'
      },
    ]
  }
};

export const userProfile = {
  name: 'Alex Sharma',
  email: 'alex.sharma@email.com',
  avatar: null,
  joinedAt: '2026-07-01',
  streak: 12,
  totalTopicsCompleted: 8,
  totalQuizzesTaken: 5,
  averageQuizScore: 82,
  badges: [
    { id: 'b1', name: 'First Upload', icon: '📄', description: 'Uploaded first syllabus', earned: true },
    { id: 'b2', name: '7-Day Streak', icon: '🔥', description: 'Studied 7 days in a row', earned: true },
    { id: 'b3', name: 'Quick Learner', icon: '⚡', description: 'Completed 5 topics in a week', earned: true },
    { id: 'b4', name: 'Quiz Master', icon: '🏆', description: 'Score 100% on a quiz', earned: false },
    { id: 'b5', name: 'Roadmap Finisher', icon: '🗺️', description: 'Complete an entire roadmap', earned: false },
  ]
};

export const weeklyActivity = [
  { day: 'Mon', minutes: 45 },
  { day: 'Tue', minutes: 90 },
  { day: 'Wed', minutes: 30 },
  { day: 'Thu', minutes: 120 },
  { day: 'Fri', minutes: 60 },
  { day: 'Sat', minutes: 80 },
  { day: 'Sun', minutes: 50 },
];
