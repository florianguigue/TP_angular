/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package session;

import dal.Article;
import dal.Auteur;
import dal.Redige;
import dal.RedigePK;
import java.util.ArrayList;
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
public class RedigeFacade {

    @PersistenceContext(unitName = "NetArticlesRestPU")
    private EntityManager em;
    
    /**
     * Liste des domaines
     * @return Collection de Domaine
     * @throws Exception 
     */
    public List<Article> getArticlesFromAuteur(Integer idAuteur) throws Exception {
        Query q = em.createNamedQuery("Redige.findByIdAuteur");
        q.setParameter("idAuteur", idAuteur);
        List<Redige> listRedige = q.getResultList();
        List<Article> listArticles = new ArrayList<>();
        for (Redige red : listRedige) {
            listArticles.add(red.getArticle());
        }
        return listArticles;
    }

    public void addRedige(Article article, Auteur auteur, RedigePK redigepk) {
        Redige redige = new Redige();
        redige.setRedigePK(redigepk);
        redige.setArticle(article);
        redige.setAuteur(auteur);
        redige.setPart(100);
        em.persist(redige);
    }
}
