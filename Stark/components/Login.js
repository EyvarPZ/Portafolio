function Login({ onLogin }) {
    try {
        const [email, setEmail] = React.useState('admin@crm.com');
        const [password, setPassword] = React.useState('admin123');
        const [error, setError] = React.useState('');
        const [isLoading, setIsLoading] = React.useState(false);

        const handleSubmit = async (e) => {
            e.preventDefault();
            setIsLoading(true);
            setError('');

            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                const user = login(email, password);
                if (user) {
                    onLogin(user);
                } else {
                    setError('Credenciales inválidas. Verifica tu email y contraseña.');
                }
            } catch (err) {
                setError('Error al conectar con el servidor');
            } finally {
                setIsLoading(false);
            }
        };
return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[hsla(38, 47.10%, 60.00%, 0.80)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("./images/ironman.png")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);
return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);
return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);
return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);
return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);
return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);
return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);
return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-[rgba(193,232,153,0.8)] bg-cover bg-center p-4',
    style: { backgroundImage: 'url("/background.jpg")' }, // Cambia a tu imagen de fondo
    'data-name': 'login-container',
    'data-file': 'components/Login.js'
},
    React.createElement('div', {
        className: 'w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden'
    },

        // Columna izquierda con imagen (visible solo en md y lg)
        React.createElement('div', {
            className: 'hidden md:flex items-center justify-center bg-center bg-cover',
            style: { backgroundImage: 'url("/login-illustration.png")' } // Cambia a tu imagen ilustrativa
        }),

        // Columna derecha con formulario
        React.createElement('div', {
            className: 'flex items-center justify-center p-10'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'rounded-2xl p-8 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl transition-all duration-300'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        )
    )
);

    } catch (error) {
        console.error('Login error:', error);
        reportError(error);
    }
}