package com.AngularCurd.springboot2angularcrudexample.repositary;

import com.AngularCurd.springboot2angularcrudexample.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
