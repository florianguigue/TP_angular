package session;

import dal.*;
import java.util.ArrayList;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

@Stateless
public class AuteurFacade {

    @PersistenceContext(unitName="NetArticlesRestPU")
    private EntityManager em;
    
    /**
     * Lecture d'un Auteur sur son id
     * @param id identifiant de l'auteur à lire
     * @return Auteur
     * @throws Exception 
     */
    public Auteur lire(int id) throws Exception {
        return em.find(Auteur.class, id);
    }
    
    /**
     * Lecteur de l'Auteur sur son login
     * @param login login de l'Auteur à lire
     * @return Auteur
     * @throws Exception 
     */
    public Auteur lireLogin(String login) throws Exception {
        Query requete = em.createNamedQuery("Auteur.findByLoginAuteur");
        requete.setParameter("loginAuteur", login);
        return (Auteur)requete.getSingleResult();
    }
    
    /**
     * Reécupère tous les auteurs ayant rédigé un article
     * dont on fourni l'ID
     * @param idArticle : Id de l'aricle dont on veut les auteurs
     * @return Collection de Auteur 
     * throws Exception 
     */
    public List<Auteur> getAuteursByArticle(Integer idArticle) throws Exception {
        Query requete = em.createNamedQuery("Redige.findByIdArticle");
        requete.setParameter("idArticle", idArticle);
        List<Redige> rediges = requete.getResultList();
        List<Auteur> auteurs = new ArrayList<Auteur>();
        for(Redige r : rediges) {
            auteurs.add(r.getAuteur());
        }
        return auteurs;
    }
    
    public List<Achete> getAchats(int id) {
        ArrayList<Achete> list = new ArrayList<>();

        try {
            Query requete = em.createNamedQuery("Achete.findAll");
            List<Achete> allAchats = (List<Achete>) requete.getResultList();

            for (Achete a : allAchats) {
                for (Redige r : a.getArticle().getRedigeList()) {
                    if (r.getAuteur().getIdAuteur() == id) {
                        list.add(a);
                    }
                }
            }

        } catch (Exception e) {
            throw e;
        }

        return list;
    }    

    public Auteur getAuteurById(int idAuteur) {
        Query q = em.createNamedQuery("Auteur.findByIdAuteur");
        q.setParameter("idAuteur", idAuteur);
        return (Auteur) q.getSingleResult();
    }
}
