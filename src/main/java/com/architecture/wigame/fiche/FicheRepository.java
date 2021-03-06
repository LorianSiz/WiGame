package com.architecture.wigame.fiche;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FicheRepository extends JpaRepository<Fiche, Long> {
}
