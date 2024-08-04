# Stage 1: Build
FROM maven:3.9.5 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Stage 2: Run
FROM openjdk:21
WORKDIR /app
COPY --from=build /app/target/ToDoListSpringBootReactFullStack-0.0.1-SNAPSHOT.jar /app/app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/app.jar"]