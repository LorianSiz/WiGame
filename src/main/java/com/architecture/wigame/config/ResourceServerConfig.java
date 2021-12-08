package com.architecture.wigame.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;


@Configuration
@EnableResourceServer
public class ResourceServerConfig extends ResourceServerConfigurerAdapter {

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http
                .headers()
                .frameOptions()
                .disable()
                .and()
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/utilisateur/connexion").permitAll()
                .antMatchers("/utilisateur/creer").permitAll()
                .antMatchers("/utilisateur/verifier/**").permitAll()
                .antMatchers("/wiki/recuperer/**").permitAll()
                .antMatchers("/fiche/recuperer/**").permitAll()
                .antMatchers("/utilisateur/recuperer/**").permitAll()
                .antMatchers("/utilisateur/modifier").permitAll()
                .anyRequest().authenticated();
    }

}
