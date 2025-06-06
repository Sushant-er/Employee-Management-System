const employees =[
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "complete": false,
        "failed": false,
        "task_title": "Create login page",
        "task_description": "Develop a responsive login UI using React.",
        "task_date": "2025-06-05",
        "category": "Frontend"
      },
      {
        "active": false,
        "new_task": false,
        "complete": true,
        "failed": false,
        "task_title": "Fix CSS bugs",
        "task_description": "Resolve layout issues on dashboard page.",
        "task_date": "2025-06-02",
        "category": "UI Fixes"
      },
      {
        "active": false,
        "new_task": false,
        "complete": false,
        "failed": true,
        "task_title": "Integrate payment gateway",
        "task_description": "Stripe integration failed due to API error.",
        "task_date": "2025-06-01",
        "category": "Backend"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "complete": false,
        "failed": false,
        "task_title": "Write unit tests",
        "task_description": "Add test coverage for all components.",
        "task_date": "2025-06-05",
        "category": "Testing"
      },
      {
        "active": false,
        "new_task": false,
        "complete": true,
        "failed": false,
        "task_title": "Deploy to staging",
        "task_description": "Successfully deployed v1.0 to staging.",
        "task_date": "2025-06-03",
        "category": "DevOps"
      },
      {
        "active": false,
        "new_task": false,
        "complete": false,
        "failed": true,
        "task_title": "Setup CI/CD",
        "task_description": "GitHub Actions config caused build errors.",
        "task_date": "2025-06-01",
        "category": "DevOps"
      },
      {
        "active": true,
        "new_task": false,
        "complete": false,
        "failed": false,
        "task_title": "Optimize images",
        "task_description": "Compress all assets without quality loss.",
        "task_date": "2025-06-05",
        "category": "Performance"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "complete": false,
        "failed": false,
        "task_title": "Refactor auth flow",
        "task_description": "Simplify authentication logic with hooks.",
        "task_date": "2025-06-05",
        "category": "Refactoring"
      },
      {
        "active": false,
        "new_task": false,
        "complete": true,
        "failed": false,
        "task_title": "Design wireframes",
        "task_description": "Created initial mockups for homepage.",
        "task_date": "2025-05-31",
        "category": "Design"
      },
      {
        "active": false,
        "new_task": false,
        "complete": false,
        "failed": true,
        "task_title": "Migrate database",
        "task_description": "Error occurred during schema migration.",
        "task_date": "2025-06-02",
        "category": "Database"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new_task": false,
        "complete": false,
        "failed": false,
        "task_title": "Implement dark mode",
        "task_description": "Add toggle for dark/light themes.",
        "task_date": "2025-06-05",
        "category": "UI/UX"
      },
      {
        "active": false,
        "new_task": false,
        "complete": true,
        "failed": false,
        "task_title": "Clean up repo",
        "task_description": "Removed unused dependencies and files.",
        "task_date": "2025-06-03",
        "category": "Maintenance"
      },
      {
        "active": true,
        "new_task": true,
        "complete": false,
        "failed": false,
        "task_title": "Implement logout",
        "task_description": "Add secure logout functionality.",
        "task_date": "2025-06-05",
        "category": "Authentication"
      },
      {
        "active": false,
        "new_task": false,
        "complete": false,
        "failed": true,
        "task_title": "Connect MongoDB",
        "task_description": "MongoDB connection string incorrect.",
        "task_date": "2025-06-01",
        "category": "Database"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "complete": false,
        "failed": false,
        "task_title": "Setup notifications",
        "task_description": "Implement toast and push notifications.",
        "task_date": "2025-06-05",
        "category": "Feature"
      },
      {
        "active": false,
        "new_task": false,
        "complete": true,
        "failed": false,
        "task_title": "Update README",
        "task_description": "Added setup instructions to README.md.",
        "task_date": "2025-06-04",
        "category": "Documentation"
      },
      {
        "active": false,
        "new_task": false,
        "complete": false,
        "failed": true,
        "task_title": "Run performance audit",
        "task_description": "Lighthouse audit failed due to timeout.",
        "task_date": "2025-06-02",
        "category": "Performance"
      },
      {
        "active": true,
        "new_task": false,
        "complete": false,
        "failed": false,
        "task_title": "Code review",
        "task_description": "Review PRs from other developers.",
        "task_date": "2025-06-05",
        "category": "Collaboration"
      },
      {
        "active": true,
        "new_task": true,
        "complete": false,
        "failed": false,
        "task_title": "Add loading spinner",
        "task_description": "Add spinner while API call is in progress.",
        "task_date": "2025-06-05",
        "category": "UX"
      }
    ]
  }
]



const admin = [
  {
  "id": 101,
  "email": "admin@example.com",
  "password": "123"
  }
]

export const setLocalStorage = ()=>{
   localStorage.setItem('employees',JSON.stringify(employees));
   localStorage.setItem('admin',JSON.stringify(admin))
}
 
export const getLocalStorage = ()=>{
   const employees= JSON.parse(localStorage.getItem('employees'))
   const admin= JSON.parse(localStorage.getItem('admin'))
   return {employees,admin}
}