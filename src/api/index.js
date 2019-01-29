import requests from "./requests";
import stubs from "./stubs";

const isStubsEnabled = true;

export default isStubsEnabled ? stubs : requests;