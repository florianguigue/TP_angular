/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package session;

import dal.Domaine;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 *
 * @author Epulapp
 */
@Stateless
public class DomaineFacade {

    @PersistenceContext(unitName = "NetArticlesRestPU")
    private EntityManager em;

    public EntityManager getEm() {
        return em;
    }
    
    /**
     * Renvoie le domaine
     * 
     * @param id
     * @return Domaine
     */
    public Domaine getFieldById(int id) {
        Query requete = em.createNamedQuery("Domaine.findByIdDomaine");
        requete.setParameter("idDomaine", id);
        return (Domaine) requete.getSingleResult();
    }
    
    public List<Domaine> getFields() {
        return em.createNamedQuery("Domaine.findAll").getResultList();
    }
}
