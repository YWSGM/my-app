import request from '../utils/request';

export function query() {
    return request('/api/users');
}

export function getList(data){
    return request('/xxx', data);
}
