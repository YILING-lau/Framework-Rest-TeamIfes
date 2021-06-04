package com.softwareconstruction.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.softwareconstruction.domain.entity.UserBean;
import com.softwareconstruction.model.ResponseModel;
import com.softwareconstruction.model.UserModel;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import static com.softwareconstruction.security.SecurityConstants.*;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter  {
    private AuthenticationManager authenticationManager;

    public JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
        setRequiresAuthenticationRequestMatcher(new AntPathRequestMatcher(SIGN_IN_URL, "POST"));
        //        this.s
        setFilterProcessesUrl(SIGN_IN_URL);
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest req,
                                                HttpServletResponse res) throws AuthenticationException {
        try {
            UserModel creds = new ObjectMapper()
                    .readValue(req.getInputStream(), UserModel.class);

            return authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            creds.getEmail(),
                            creds.getPassword(),
                            new ArrayList<>())
            );
        } catch (AuthenticationException e) {
            System.out.println("AuthenticationException => " + e.getMessage());
            throw e;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest req,
                                            HttpServletResponse res,
                                            FilterChain chain,
                                            Authentication auth) throws IOException {
        System.out.println("Successful?");

        String token = JWT.create()
                .withSubject(((UserBean) auth.getPrincipal()).getEmail())
                .withExpiresAt(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .sign(Algorithm.HMAC512(SECRET.getBytes()));
        UserBean bean = ((UserBean) auth.getPrincipal());
        UserModel userModel = new UserModel();
        userModel.setId(bean.getId());
        userModel.setEmail(bean.getEmail());
        userModel.setName(bean.getName());
        userModel.setJwtToken(token);
        ResponseModel<UserModel> responseModel = new ResponseModel<UserModel>().success(userModel);
        String body = new ObjectMapper()
                .writerWithDefaultPrettyPrinter()
                .writeValueAsString(responseModel);
        res.getWriter().write(body);
        res.getWriter().flush();
    }
}
