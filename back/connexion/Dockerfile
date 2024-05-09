# Use the official Maven image to create a build artifact
# This uses a multi-stage build process where the first stage handles the build
FROM maven:3.8.4-openjdk-17 as build

# Copy the project files into the image
COPY social/src /home/app/src
COPY social/pom.xml /home/app

# Set the working directory
WORKDIR /home/app

# Package the application
RUN mvn clean package

# Use OpenJDK for the final image
FROM openjdk:17

# Copy the JAR from the build stage to the final image
COPY --from=build /home/app/target/*.jar /usr/local/lib/app.jar

# Run the application
CMD ["java", "-jar", "/usr/local/lib/app.jar"]
