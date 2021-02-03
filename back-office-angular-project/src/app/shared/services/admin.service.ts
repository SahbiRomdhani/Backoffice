import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {GenericService} from "./generic.service";
import {HttpClient} from "@angular/common/http";
import {StorageService} from "./storage.service";
import {Config} from "../config";
import {Admin} from "../models/admin";
import {Credentials} from "../models/credential";


@Injectable()
export class AdminService extends GenericService {

  currentAdmin: Admin;
  adminToken: string;

  constructor(private http: HttpClient, private storageService: StorageService) {
    super();
    this.retrieveAdminFromCache();
    this.retrieveAdminTokenFromCache();
  }

  retrieveAdminFromCache() {
    this.currentAdmin = this.storageService.read(Config.tokenKey);
  }

  retrieveAdminTokenFromCache() {
    return this.adminToken = this.storageService.read(Config.tokenKey);
  }

  isAdminLoggedIn() {
    return this.retrieveAdminTokenFromCache() !== null;
  }

  me() {
    const headers = this.headers.set('Authorization', this.adminToken);
    return this.http.get(Config.adminUrl + "/me", {headers});
  }


  loginAdmin(credentials: Credentials) {
    return this.http.post(Config.adminUrl + "/login", credentials);
  }

  saveAdmin(data: any) {
    this.adminToken = data.token;
    this.currentAdmin = data.admin;
    this.storageService.write(Config.tokenKey, 'Bearer ' + data.token);
    this.storageService.write(Config.adminKey, data.admin);
  }

  clearAdminFromCache() {
    this.storageService.remove(Config.tokenKey);
    this.storageService.remove(Config.adminKey);
  }

  /* Examples CRUD */

  /* GET dans la liste ou getObjectById */
  getExample(id: number) {
    const headers = this.headers.set('Authorization', this.adminToken);
    return this.http.get(Config.adminUrl + id + "/getExample", {headers});
  }

  /* POST Dans l'ajout d'un objet */
  postExample(id: number, objectBody: any) {
    const headers = this.headers.set('Authorization', this.adminToken);
    return this.http.post(Config.adminUrl + "/postExample", objectBody, {headers});
  }

  /* PUT Dans l'edit d'un objet */
  putExample(id: number, objectBody) {
    const headers = this.headers.set('Authorization', this.adminToken);
    return this.http.put(Config.adminUrl + id + "/putExample", objectBody, {headers});
  }

  /* Delete Dans la suppression d'un element */
  deleteExample(id: number) {
    const headers = this.headers.set('Authorization', this.adminToken);
    return this.http.delete(Config.adminUrl + id + "/deleteExample", {headers});
  }

}
