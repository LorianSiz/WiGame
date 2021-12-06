package com.architecture.wigame.favoris;

import com.architecture.wigame.utilisateur.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FavorisRepository extends JpaRepository<Favoris, Long> {

    @Override
    List<Favoris> findAll();

    @Override
    void delete(Favoris entity);


}
