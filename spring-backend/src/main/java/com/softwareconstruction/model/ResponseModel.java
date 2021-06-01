package com.softwareconstruction.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.ToString;

import java.util.List;
import java.util.Map;

@ToString
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseModel<T> {
    private boolean success;
    private String message;
    private T data;
    private Integer errorCode;
    private List<FieldErrorModel> errorBag;

    private Map<String, Object> errorContextMap;

    public ResponseModel() {
        // empty
    }

    public boolean isSuccess() {
        return this.success;
    }

    public void setSuccess(final boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return this.message;
    }

    public void setMessage(final String message) {
        this.message = message;
    }

    public T getData() {
        return this.data;
    }

    public void setData(final T data) {
        this.data = data;
    }

    public List<FieldErrorModel> getErrorBag() {
        return this.errorBag;
    }

    public void setErrorBag(final List<FieldErrorModel> errorBag) {
        this.errorBag = errorBag;
    }

    public Map<String, Object> getErrorContextMap() {
        return this.errorContextMap;
    }

    public void setErrorContextMap(final Map<String, Object> errorContext) {
        this.errorContextMap = errorContext;
    }

    public Integer getErrorCode(){ return this.errorCode; }

    public void setErrorCode(Integer errorCode) { this.errorCode = errorCode; }

    public ResponseModel<T> success(final T data) {
        this.success = true;
        this.data = data;
        return this;
    }

    public ResponseModel<T> fail(final String message) {
        this.success = false;
        this.message = message;
        return this;
    }

    public ResponseModel<T> fail(final Integer errorCode, final String message) {
        this.success = false;
        this.errorCode = errorCode;
        this.message = message;
        return this;
    }

    public ResponseModel<T> fail(final List<FieldErrorModel> errorBag) {
        this.success = false;
        this.errorBag = errorBag;
        return this;
    }

    public ResponseModel<T> fail(final Integer errorCode, final String message, final Map<String, Object> errorContext) {
        this.errorCode = errorCode;
        this.message = message;
        this.success = false;
        this.errorContextMap = errorContext;
        return this;
    }

    public ResponseModel<T> success(final T data, final String message) {
        this.success = true;
        this.data = data;
        this.message = message;
        return this;
    }
}
