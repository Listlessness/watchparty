require('dotenv').config();

const defaults = {
  REDIS_URL: '', // Optional, for room persistence and VM queueing (localhost:6379 for a local install)
  DATABASE_URL: '', // Optional, for permanent rooms (localhost:5432 for a local install)
  YOUTUBE_API_KEY: '', // Optional, provide one to enable searching YouTube
  NODE_ENV: '', // Usually, you should let process.env.NODE_ENV override this
  FIREBASE_ADMIN_SDK_CONFIG: '', // Optional, for features requiring sign-in/authentication
  FIREBASE_DATABASE_URL: '', // Optional (unused)
  STRIPE_SECRET_KEY: '', // Optional, for subscriptions
  VBROWSER_SESSION_SECONDS: 10800, // Number of seconds to allow vbrowsers to run for
  VBROWSER_SESSION_SECONDS_LARGE: 43200, // Number of seconds to allow large vbrowsers to run for
  VM_POOL_LIMIT: 0, // Max number of VMs to have in pool (0 to disable limit)
  VM_POOL_LIMIT_LARGE: 0, // Max number of large VMs to have in pool (0 to disable limit)
  VM_POOL_MIN_SIZE: 0, // Minimum number of VM instances to keep in the pool
  VM_POOL_MIN_SIZE_LARGE: 0, // Minimum number of large VM instances to keep in the pool
  VM_POOL_MIN_BUFFER: 0, // Minimum number of instances to keep as a buffer
  VM_POOL_MIN_BUFFER_LARGE: 0, // Minimum number of large instances to keep as a buffer
  VM_POOL_RAMP_DOWN_HOURS: '', // Comma separated start/end UTC hours of the ramp down period
  VM_POOL_RAMP_UP_HOURS: '', // Comma separated start/end UTC hours of the ramp up period
  VBROWSER_TAG: '', // Optional, tag to put on VBrowser VM instances
  DO_TOKEN: '', // Optional, for DigitalOcean VMs
  DO_GATEWAY: '', // Gateway handling SSL termination
  DO_IMAGE: '', // ID of DigitalOcean snapshot image to use for vbrowser
  DO_SSH_KEYS: '', // IDs of DigitalOcean SSH keys to access vbrowsers
  HETZNER_TOKEN: '', // Optional, for Hetzner VMs
  HETZNER_GATEWAY: '', // Gateway handling SSL termination
  HETZNER_GATEWAY_US: '', // Gateway handling SSL termination
  HETZNER_NETWORKS: '', // IDs of Hetzner networks vbrowsers are using
  HETZNER_NETWORKS_US: '', // IDs of Hetzner networks vbrowsers are using
  HETZNER_SSH_KEYS: '', // IDs of Hetzner SSH keys to access vbrowsers
  HETZNER_IMAGE: '', // ID of Hetzner snapshot image to use for vbrowser
  SCW_SECRET_KEY: '', // Optional, for Scaleway VMs
  SCW_ORGANIZATION_ID: '', // Optional, for Scaleway VMs
  SCW_GATEWAY: '', // Gateway handling SSL termination
  SCW_IMAGE: '', // ID of Scaleway snapshot image to use for vbrowser
  DOCKER_VM_HOST: '', // Optional, for Docker VMs
  DOCKER_VM_HOST_SSH_USER: '', // Optional, username for Docker host
  DOCKER_VM_HOST_SSH_KEY_BASE64: '', // Optional, private SSH key for Docker host
  RECAPTCHA_SECRET_KEY: '', // Optional, Recaptcha for VBrowser creation
  HTTPS: '', // Optional, Set to use HTTPS on the server
  SSL_KEY_FILE: '', // Optional, Filename of SSL key
  SSL_CRT_FILE: '', // Optional, Filename of SSL cert
  PORT: 8080, // Port to use for server
  HOST: '0.0.0.0', // Host interface to bind server to
  STATS_KEY: '', // Secret string to validate viewing stats
  CUSTOM_SETTINGS_HOSTNAME: '', // Hostname to send different config settings to client
  MEDIA_PATH: '', // Path of server where media files might be found (GitLab/S3/nginx)
  STREAM_PATH: '', // Path of server that supports additional video streams
  KV_KEY: '', // Secret string to validate use of KV endpoint (unused)
  ROOM_CAPACITY: 0, // Maximum capacity of a standard room. Set to 0 for unlimited.
  ROOM_CAPACITY_SUB: 0, // Maximum capacity of a sub room. Set to 0 for unlimited.
  BUILD_DIRECTORY: 'build', // Name of the directory where the built React UI is served from
  VM_MANAGER_ID: 'Docker', // ID value of the VM Manager implementation to use (see vm directory)
  VM_MIN_UPTIME_MINUTES: 0, // Number of minutes of the hour VMs must exist for before being eligible for termination
  SHARD: undefined, // Shard ID of the web server (configure in ecosystem.config.js)
  SUBSCRIBER_ROOM_LIMIT: 20, // The maximum number of rooms a subscriber can have
  VMWORKER_PORT: 3100, // Port to use for the vmWorker HTTP server
};

export default {
  ...defaults,
  ...process.env,
};
