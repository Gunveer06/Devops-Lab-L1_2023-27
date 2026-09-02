-- User insertion handled by CommandLineRunner in PortfolioApplication.java

-- Insert Initial Skills
INSERT INTO skills (name, percentage, icon_class) VALUES 
('Java', 90, 'fab fa-java'),
('Spring Boot', 85, 'fas fa-leaf'),
('React', 80, 'fab fa-react'),
('Python', 75, 'fab fa-python'),
('SQL', 85, 'fas fa-database'),
('MongoDB', 70, 'fas fa-envira'),
('MySQL', 80, 'fas fa-database'),
('Git', 85, 'fab fa-git-alt'),
('GitHub', 90, 'fab fa-github'),
('Docker', 65, 'fab fa-docker'),
('Jenkins', 60, 'fab fa-jenkins'),
('REST APIs', 85, 'fas fa-server'),
('Maven', 80, 'fas fa-cogs'),
('Linux', 70, 'fab fa-linux');

-- Insert Initial Projects
INSERT INTO projects (title, description, technology_stack, github_url, demo_url, image_url) VALUES 
('Heart Disease Predictor', 'Developed a predictive model using Random Forest achieving 80%+ accuracy. Integrated Java Spring backend, Python Flask API, React frontend. Designed GUI for real-time predictions and decision-making.', 'Spring Boot, React, Python Flask, Random Forest', 'https://github.com/Gunveer06', '', ''),
('Procurement-to-Pay AI Platform', 'Built AI-powered P2P platform with real-time dashboards. Used Supabase for authentication, storage, and backend services. Developed fraud detection using XGBoost (F1: 0.88).', 'Spring Boot, React, Supabase, XGBoost', 'https://github.com/Gunveer06', '', ''),
('Smart Store Navigation System', 'Engineered a full-stack indoor navigation platform for retail stores with dynamic route generation. Created interactive store-map management tools using React, HTML5, and SVG-based visualizations. Implemented A* Pathfinding.', 'Spring Boot, React, MongoDB, A* Pathfinding', 'https://github.com/Gunveer06', '', '');
