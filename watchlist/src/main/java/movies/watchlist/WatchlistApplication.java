package movies.watchlist;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy; // السطر ده مهم

@SpringBootApplication
@EnableAspectJAutoProxy(proxyTargetClass = true) // ده السطر اللي ناقصك يا بطل
public class WatchlistApplication {

    public static void main(String[] args) {
        SpringApplication.run(WatchlistApplication.class, args);
    }

}