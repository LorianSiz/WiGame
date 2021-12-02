package com.architecture.wigame.config;

import com.architecture.wigame.utilisateur.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;


@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UtilisateurRepository repository;

    @Override
    public UserDetails loadUserByUsername(String pseudo) {
        return repository
                .findByPseudo(pseudo)
                .map(u -> new org.springframework.security.core.userdetails.User(
                        u.getPseudo(),
                        u.getMdp(),
                        new ArrayList<>()))
                .orElseThrow(() -> new UsernameNotFoundException("No user with "
                        + "the name " + pseudo + "was found in the database"));
    }
}
