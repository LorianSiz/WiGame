package com.architecture.wigame.favoris;

import com.architecture.wigame.utilisateur.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FavorisRepository extends JpaRepository<Favoris, Long> {

    @Override
    List<Favoris> findAll();

    @Query(value = "SELECT * FROM Favoris WHERE utilisateur_id = ?1", nativeQuery = true)
    List<Favoris> findByUtil_conserne(Long id_util);

    @Override
    void delete(Favoris entity);

    @Query(value = "SELECT COUNT(f)>0 FROM Favoris f WHERE fiche_id = ?1 AND utilisateur_id = ?2", nativeQuery = true)
    boolean existsFavorisByFich_conserneAndUtil_conserne(Long id_fiche, Long id_util);

}
