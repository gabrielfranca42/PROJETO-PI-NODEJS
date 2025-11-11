Converted Spring Boot project -> Node.js (Express) + Sequelize (MySQL)

Files generated in this project are based on the Java model classes found under:
/mnt/data/spring_project_extracted/PROJETO-PI-main/testA1/src/main/java

What was converted automatically:
- Sequelize models for each Java @Entity-like class (fields inferred from 'private' declarations)
- Associations: basic mapping for @OneToMany and @ManyToOne found in Java sources
- Generic CRUD controllers and routes for each model
- app.js, package.json, .env.example

Caveats & manual steps required:
- Some Java model files contained '...' or incomplete code; fields not present there couldn't be inferred and were omitted.
- DTOs, detailed validation annotations, custom service logic, and complex controller methods were converted to generic CRUD handlers. Custom endpoints in Java controllers were listed in SPRING_CONTROLLERS_FOUND.txt for manual porting.
- You should review and adjust model attribute types (DECIMAL precision, STRING lengths), add validations, and implement any business rules from services.
- Add migrations and seeders for production use; currently sequelize.sync() is used.
- If your project uses JWT auth or Spring Security, add equivalent middleware (not auto-converted).

Next steps I already prepared (per your request for separate step-by-step outputs):
- A folder `step_by_step` contains:
  - `models/` with all Sequelize model files
  - `controllers/` with generated controllers
  - `routes/` with generated routes

Files generated: 11 models, 11 controllers/routes.


Added DTOs in src/dtos and Services in src/services. Controllers refactored to use services.
