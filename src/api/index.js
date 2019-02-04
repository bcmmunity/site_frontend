import requests from "./requests";
import stubs from "./stubs";

const fake = true;

export default fake ? stubs : requests;