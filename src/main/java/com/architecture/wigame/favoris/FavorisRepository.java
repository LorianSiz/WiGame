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

    @Query(value = "SELECT * FROM Favoris WHERE fiche_id = ?1 AND utilisateur_id = ?2", nativeQuery = true)
    List<Favoris> findByFich_conserneAndUtil_conserne(Long id_fiche, Long id_util);

    @Override
    void delete(Favoris entity);

    @Query(value = "SELECT COUNT(*)>0 FROM Favoris WHERE fiche_id = ?1 AND utilisateur_id = ?2", nativeQuery = true)
    int existsFavorisByFich_conserneAndUtil_conserne(Long id_fiche, Long id_util);
}
