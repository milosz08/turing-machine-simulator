# Turing machine simulator

[[GitHub repository](https://github.com/milosz08/turing-machine-simulator)] |
[[About project](https://miloszgilga.pl/project/turing-machine-simulator-app)]

An advanced, single-tape, deterministic Turing Machine simulator written using the ReactJS library. Available in light
and dark modes, depending on user preference. This machine is a great foundation for understanding how computer
processing of algorithms works, found frequently in Computer Science majors at technical colleges.

## Build image

```bash
docker build -t milosz08/turing-machine-simulator-app .
```

## Create container

* Using command:

```bash
docker run -d \
  --name turing-machine-simulator-app \
  -p 9091:80 \
  milosz08/turing-machine-simulator-app:latest
```

* Using `docker-compose.yml` file:

```yaml
services:
  turing-machine-simulator-app:
    container_name: turing-machine-simulator-app
    image: milosz08/turing-machine-simulator-app:latest
    ports:
      - '9091:80'
    networks:
      - turing-machine-simulator-network

  # other containers...

networks:
  turing-machine-simulator-network:
    driver: bridge
```

## Author

Created by Miłosz Gilga. If you have any questions about this application, send message:
[miloszgilga@gmail.com](mailto:miloszgilga@gmail.com).

## License

This application is on Apache 2.0 License.
