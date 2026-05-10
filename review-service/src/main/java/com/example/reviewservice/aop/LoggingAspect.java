package com.example.reviewservice.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {

    @Before("execution(* com.example.reviewservice.service.*.*(..))")
    public void beforeServiceMethod(JoinPoint joinPoint) {
        System.out.println("AOP Before: " + joinPoint.getSignature().getName());
    }

    @AfterReturning(
            pointcut = "execution(* com.example.reviewservice.service.*.*(..))",
            returning = "result"
    )
    public void afterServiceMethod(JoinPoint joinPoint, Object result) {
        System.out.println("AOP After Returning: " + joinPoint.getSignature().getName());
        System.out.println("Returned: " + result);
    }

    @AfterThrowing(
            pointcut = "execution(* com.example.reviewservice.service.*.*(..))",
            throwing = "ex"
    )
    public void afterThrowingServiceMethod(JoinPoint joinPoint, Exception ex) {
        System.out.println("AOP Exception in: " + joinPoint.getSignature().getName());
        System.out.println("Error: " + ex.getMessage());
    }
}
