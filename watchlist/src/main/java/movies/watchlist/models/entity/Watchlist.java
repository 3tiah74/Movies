package movies.watchlist.models.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "watchlist")
@Data // دي كفاية جداً بتعمل الـ Getters والـ Setters
public class Watchlist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "watchlist_id")
    private Long watchlistId;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "movie_id")
    private Long movieId;

    @Column(name = "added_at", updatable = false)
    private LocalDateTime addedAt;
   
    @PrePersist
    protected void onCreate() {
        this.addedAt = LocalDateTime.now();
    }
    
    // امسح الميثود التانية اللي كانت مكتوبة هنا لأنها كانت مكررة وغلط
}