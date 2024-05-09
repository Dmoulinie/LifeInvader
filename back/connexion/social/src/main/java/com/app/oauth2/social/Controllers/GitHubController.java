package com.app.oauth2.social.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.view.RedirectView;

import com.app.oauth2.social.models.User;
import com.app.oauth2.social.repositories.UserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class GitHubController {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private UserRepository userRepository;
    // GitHub OAuth callback URL configured in your GitHub app settings
    private static final String REDIRECT_URI = "http://localhost:8080/github/callback";

    // GitHub OAuth credentials
    private static final String CLIENT_ID = "Iv1.4849f30c8208f619";
    private static final String CLIENT_SECRET = "b0dee2f7ad96fee5b0e09ef340e19b2db39d8016";

    @GetMapping("/github/callback")
    public String gitHubCallback(@RequestParam("code") String code) throws JsonMappingException, JsonProcessingException {

        // Exchange the authorization code for an access token
        String tokenUrl = "https://github.com/login/oauth/access_token" +
                "?client_id=" + CLIENT_ID +
                "&client_secret=" + CLIENT_SECRET +
                "&code=" + code +
                "&redirect_uri=" + REDIRECT_URI;
    
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> entity = new HttpEntity<>(headers);
    
        ResponseEntity<String> response = restTemplate.exchange(tokenUrl, HttpMethod.POST, entity, String.class);
    
        // Extract the access token from the response
        String responseBody = response.getBody();
        String accessToken = extractAccessToken(responseBody);
    
        // Use the access token to make authenticated requests to the GitHub API
        String apiUrl = "https://api.github.com/user";
        headers.set("Authorization", "Bearer " + accessToken);
        entity = new HttpEntity<>(headers);
    
        ResponseEntity<String> userDataResponse = restTemplate.exchange(apiUrl, HttpMethod.GET, entity, String.class);

        String userDataString = userDataResponse.getBody();

        // Parse the user data JSON string into a JsonNode object       
        ObjectMapper mapper = new ObjectMapper();
        JsonNode userDataJson = mapper.readTree(userDataString);

        // Keep only wanted data
        String id = userDataJson.get("id").asText();
        String name = userDataJson.get("login").asText();
        String node_id = userDataJson.get("node_id").asText();
        String avatar_url = userDataJson.get("avatar_url").asText();
        String html_url = userDataJson.get("html_url").asText();
        String access_token = accessToken;

        // JsonNode userDataFinal = mapper.createObjectNode()
        //     .put("id", id)
        //     .put("name", name)
        //     .put("node_id", node_id)
        //     .put("avatar_url", avatar_url)
        //     .put("html_url", html_url);

        // Stocker les données dans la base de données mongodb : users
        userRepository.save(new User(id,name, node_id, avatar_url, html_url, access_token));
        
        // Faire un redirect vers "localhost:5173?id=id"
        return "test";
        // return new RedirectView("http://localhost:5173?token=" + access_token);

    }


    private String extractAccessToken(String responseBody) {
        // Parse the response body to extract the access token
        String[] parts = responseBody.split("&");
        for (String part : parts) {
            String[] keyValue = part.split("=");
            if (keyValue.length == 2 && keyValue[0].equals("access_token")) {
                return keyValue[1];
            }
        }
        return null; // Access token not found
    }

    @GetMapping("/github/getAllUsers")
    public List<User> returnAllUsers() {
        // return all users from the database
        for (User Album : userRepository.findAll()) {
            System.out.println(Album);
        }
        return userRepository.findAll();
    }
}