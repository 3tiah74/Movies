package movies.watchlist.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import jakarta.servlet.http.HttpServletResponse;
import java.util.Arrays;

@Aspect
@Component
public class LoggingAspect {

    public LoggingAspect() {
        System.out.println("#########################################");
        System.out.println("   WATCHLIST AOP - FRONTEND LINK READY   ");
        System.out.println("#########################################");
    }

    @Pointcut("within(movies.watchlist.controllers..*)")
    public void controllerPointcut() {}

    @Around("controllerPointcut()")
    public Object logAndTagResponse(ProceedingJoinPoint joinPoint) throws Throwable {
        // 1. كود يتنفذ قبل ما الكنترولر يشتغل (زي الـ @Before)
        String methodName = joinPoint.getSignature().getName();
        System.out.println("===> [AOP] Frontend Request to: " + methodName);
        System.out.println("===> [AOP] Args: " + Arrays.toString(joinPoint.getArgs()));

        // 2. تشغيل الميثود الأصلية (الكنترولر) والحصول على النتيجة
        Object result = joinPoint.proceed();

        // 3. إضافة بصمة (Header) في الرد المرسل للمتصفح
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (attributes != null) {
            HttpServletResponse response = attributes.getResponse();
            if (response != null) {
                // ده الهيدر اللي هتشوفه في الـ Network Tab في الكروم
                response.addHeader("X-Backend-AOP", "Success-Aspect-Executed");
                response.addHeader("X-Processed-By", "Sufian-Aspect");
            }
        }

        return result;
    }
}