package com.java.ems_be.services;

import java.util.List;

import com.java.ems_be.Dtos.EmployeeDto;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto getEmployeeById(Long id);
    List<EmployeeDto> getAllEmployees();
    EmployeeDto updateEmployee(Long id,EmployeeDto updatedEmployeeDto);
    void deleteEmployee(Long id);
}
