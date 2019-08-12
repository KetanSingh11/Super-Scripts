from setuptools import setup, find_packages

with open("README.md", "r") as fh:
    long_description_txt = fh.read()

setup(
    name="find-my-ec2",
    version="0.1",
    
    description="Simple utility to query aws for instances",
    long_description=long_description_txt,
    
    author="Ketan Singh",
    author_email="ketansingh_vsec@yahoo.com",

    packages=find_packages(exclude=['tests', 'tests.*']),
    install_requires=[
        'boto3',
        'prettytable'
    ],

    zip_safe=False,
)
