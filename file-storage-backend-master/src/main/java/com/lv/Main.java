package com.lv;

import com.lv.config.FileStorageProperties;
import com.lv.config.StorageProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({
		FileStorageProperties.class,
		StorageProperties.class
})
public class Main {
	public static void main(String[] args) {
		SpringApplication.run(Main.class, args);
	}
}

