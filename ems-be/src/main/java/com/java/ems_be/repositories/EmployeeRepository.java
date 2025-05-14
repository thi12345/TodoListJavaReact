package com.java.ems_be.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.ems_be.entities.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
