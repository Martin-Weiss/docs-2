---
sidebar_label: "Requirements"
title: ""
---

# Requirements

1. Private registry that supports OCI artifacts, [here](../../distributing-policies/oci-registries-support) you can find a list of supported OCI registries. It will be used for storing the container images and policies. Or as an alternative a HTTPS server where the policy files can be hosted.
2. [kwctl](https://github.com/kubewarden/kwctl) 1.3.1 or above
3. For OCI registry - docker v20.10.6, skopeo, podman or an other utility to download and upload the policies as OCI artifacts
